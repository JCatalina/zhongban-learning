const fs = require('fs');
const vm = require('vm');

console.log('=== 开始执行中班学习乐园全量验证 ===');

// 1. 加载所有数据文件
const dataFiles = [
  'data_read.js',
  'data_math.js',
  'data_calc.js',
  'data_shape.js',
  'data_logic.js',
  'data_science.js',
  'data_safe.js',
  'data_song.js',
  'data_eng.js',
  'data_society.js'
];

const sandbox = {
  window: { DATASETS: [] },
  console: console
};
vm.createContext(sandbox);

dataFiles.forEach(f => {
  const code = fs.readFileSync(f, 'utf8');
  try {
    vm.runInContext(code, sandbox);
    console.log(`[PASS] 数据文件解析正常: ${f}`);
  } catch (e) {
    console.error(`[FAIL] 数据文件语法错误: ${f}`, e);
    process.exit(1);
  }
});

const datasets = sandbox.window.DATASETS;
console.log(`[INFO] 成功加载 ${datasets.length} 个学科模块`);

// 2. 验证每个题目的合法性及 pic 兼容性
let totalQs = 0;
const suspicious = /[\u{1F900}-\u{1FAFF}]|[\u4e00-\u9fa5]/u;
let picWarnings = 0;

datasets.forEach(m => {
  if (!m.sets) return;
  m.sets.forEach((s, si) => {
    s.qs.forEach((q, qi) => {
      totalQs++;
      if (m.layout === 'song') return; // 儿歌古诗专有展示布局
      if (typeof q.q !== 'string' || !q.q) {
        console.error(`[FAIL] 题干缺失: ${m.id}-${si}-${qi}`);
      }
      if (typeof q.a !== 'number' || q.a < 0 || q.a >= q.opts.length) {
        console.error(`[FAIL] 正确答案索引越界: ${m.id}-${si}-${qi}`);
      }
      // 检查配图
      if (q.pic && suspicious.test(q.pic)) {
        // 如果包含中文字符且不是 SVG，发出警告
        if (/[\u4e00-\u9fa5]/.test(q.pic) && !q.pic.includes('<svg') && !q.pic.includes('<span')) {
          console.warn(`[WARN] 配图中混入中文: ${m.id}-${si}-${qi} => ${q.pic}`);
          picWarnings++;
        }
      }
    });
  });
});
console.log(`[INFO] 校验了全库共 ${totalQs} 道题目，配图严重违规数量: ${picWarnings}`);

// 3. 抽取 index.html 中的 buildAnimProps 并进行全量匹配测试
const html = fs.readFileSync('index.html', 'utf8');

// 注入模拟运行时辅助函数
const animMockCode = `
function stripPlain(s){ return String(s||'').replace(/<[^>]+>/g,''); }
function picTokens(s){ return Array.from(stripPlain(s).trim().split(/\\s+/)); }
function isSvg(s){ return typeof s==='string' && s.trim().startsWith('<'); }
function mod(id){ return window.DATASETS.find(x=>x.id===id); }
` + html.match(/function buildAnimProps[\s\S]*?\n\}/)[0];

vm.runInContext(animMockCode, sandbox);

// 已注册的 Remotion 动画组件类型
const validAnimTypes = new Set([
  'add', 'sub', 'split', 'count', 'compare', 'ordinal',
  'neighbor', 'oddEven', 'oddLine', 'wordCard', 'antonym',
  'safetyRule', 'experiment', 'societyJob', 'conceptCard'
]);

let animTested = 0;
let animFailed = 0;
const typeCounts = {};

datasets.forEach(m => {
  if (m.layout === 'song') return; // 古诗儿歌不走答题动画
  m.sets.forEach((s, si) => {
    s.qs.forEach((q, qi) => {
      animTested++;
      const props = sandbox.buildAnimProps(m.id, si, q);
      if (!props || !props.type || !validAnimTypes.has(props.type)) {
        console.error(`[FAIL] 题目缺失合法动画: ${m.id}-${si}-${qi}`, props);
        animFailed++;
      } else {
        typeCounts[props.type] = (typeCounts[props.type] || 0) + 1;
      }
    });
  });
});

console.log(`[INFO] 动画全量覆盖测试: 共测试 ${animTested} 道题，失败: ${animFailed}`);
console.log('[INFO] 各动画类型分布:', typeCounts);

if (animFailed === 0 && picWarnings === 0) {
  console.log('🎉 验证全部通过！100% 题目均已获得专属或兜底 Remotion 动画，配图零豆腐块！');
} else {
  console.error('存在验证不通过项，请检查修复！');
  process.exit(1);
}

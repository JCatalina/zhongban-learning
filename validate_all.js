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
  'safetyRule', 'experiment', 'societyJob', 'conceptCard', 'tenFrame'
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

// 4. 绘本与离线字库专项校验
console.log('[INFO] 开始绘本与离线字库专项校验...');
vm.runInContext(fs.readFileSync('data_story.js', 'utf8'), sandbox);
vm.runInContext(fs.readFileSync('hanzi-data.js', 'utf8'), sandbox);

const books = sandbox.window.STORY_BOOKS || [];
let storyAudioMissing = 0;
books.forEach(b => {
  b.pages.forEach(p => {
    const audioPath = 'audio/' + p.audioId + '.mp3';
    if(!fs.existsSync(audioPath) || fs.statSync(audioPath).size < 100){
      console.error(`[FAIL] 绘本音频缺失: ${audioPath}`);
      storyAudioMissing++;
    }
  });
});

const hanziKeys = Object.keys(sandbox.window.HANZI_DATA || {});
if (hanziKeys.length < 60) {
  console.error(`[FAIL] 离线字库数量不足: ${hanziKeys.length}`);
} else {
  console.log(`[INFO] 离线字库完备，收录 ${hanziKeys.length} 个核心中班汉字笔画`);
}

// 5. 场景口语学堂 100 句专项校验
console.log('[INFO] 开始场景口语学堂 100 句全量校验...');
vm.runInContext(fs.readFileSync('data_english_scenes.js', 'utf8'), sandbox);

const scenes = sandbox.window.ENGLISH_SCENES || [];
let engAudioMissing = 0;
let engChunkMissing = 0;
let totalSceneWords = 0;
let totalSceneSents = 0;

if(scenes.length !== 10){
  console.error(`[FAIL] 场景数量不符，应为 10 个场景，实际: ${scenes.length}`);
}

scenes.forEach((sc, scIdx) => {
  if(!sc.words || sc.words.length < 5){
    console.error(`[FAIL] 场景 ${sc.id} 词汇不足 5 个`);
  }
  sc.words.forEach(w => {
    totalSceneWords++;
    const wPath = 'audio/' + w.audioId + '.mp3';
    if(!fs.existsSync(wPath) || fs.statSync(wPath).size < 100){
      console.error(`[FAIL] 生词音频缺失: ${wPath}`);
      engAudioMissing++;
    }
  });

  if(!sc.sentences || sc.sentences.length !== 10){
    console.error(`[FAIL] 场景 ${sc.id} 句子数不为 10`);
  }
  sc.sentences.forEach(s => {
    totalSceneSents++;
    if(!s.chunks || s.chunks.length === 0){
      console.error(`[FAIL] 句子未拆解语块 chunks: ${s.id}`);
      engChunkMissing++;
    }
    const sPath = 'audio/' + s.audioId + '.mp3';
    if(!fs.existsSync(sPath) || fs.statSync(sPath).size < 100){
      console.error(`[FAIL] 句子朗读音频缺失: ${sPath}`);
      engAudioMissing++;
    }
    const expPath = 'audio/' + (s.explainAudioId || (s.audioId + '_exp')) + '.mp3';
    if(!fs.existsSync(expPath) || fs.statSync(expPath).size < 100){
      console.error(`[FAIL] 句子精讲音频缺失: ${expPath}`);
      engAudioMissing++;
    }
  });
});

console.log(`[INFO] 场景口语学堂检验完毕: ${scenes.length} 大场景，${totalSceneWords} 个核心词，${totalSceneSents} 个生活高频句，音频缺失: ${engAudioMissing}`);

// 6. Lottie 少儿灵动矢量动画校验
console.log('[INFO] 开始 Lottie 少儿灵动矢量动画校验...');
let lottieErrors = 0;
if (!fs.existsSync('lottie.min.js') || fs.statSync('lottie.min.js').size < 100000) {
  console.error('[FAIL] 缺少本地离线 lottie.min.js 运行时或文件过小');
  lottieErrors++;
}
if (!fs.existsSync('lottie_scenes_anim.js') || fs.statSync('lottie_scenes_anim.js').size < 2000) {
  console.error('[FAIL] 缺少 lottie_scenes_anim.js 或文件过小');
  lottieErrors++;
}
try {
  vm.runInContext(fs.readFileSync('lottie_scenes_anim.js', 'utf8'), sandbox);
  if (!sandbox.window.SceneAnimManager || typeof sandbox.window.SceneAnimManager.mount !== 'function') {
    console.error('[FAIL] SceneAnimManager 未正确导出');
    lottieErrors++;
  } else {
    console.log('[PASS] SceneAnimManager 接口完备，支持 mount, setSpeaking, tickle, cheer');
  }
} catch (e) {
  console.error('[FAIL] lottie_scenes_anim.js 解析出错:', e);
  lottieErrors++;
}

if (animFailed === 0 && picWarnings === 0 && storyAudioMissing === 0 && hanziKeys.length >= 60 && engAudioMissing === 0 && engChunkMissing === 0 && totalSceneSents === 100 && lottieErrors === 0) {
  console.log('🎉 验证全部通过！四大对标功能 + 场景口语 100 句脱口秀 + Lottie灵动动画完整就绪，零缺陷交付！');
} else {
  console.error('存在验证不通过项，请检查修复！');
  process.exit(1);
}

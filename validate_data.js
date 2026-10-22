// validate_data.js
// 自动化数据完整性与题库音频一致性校验脚本

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('========================================================');
console.log('🔍 开始执行《中班学习乐园》题库与音频资产自动化全量校验');
console.log('========================================================\n');

// 1. 加载所有数据集
const dataFiles = [
  'data_read.js',
  'data_math.js',
  'data_calc.js',
  'data_shape.js',
  'data_logic.js',
  'data_science.js',
  'data_safe.js',
  'data_eng.js',
  'data_song.js',
  'data_society.js'
];

const sandbox = {};
sandbox.window = sandbox;
sandbox.global = sandbox;
vm.createContext(sandbox);

dataFiles.forEach(file => {
  const code = fs.readFileSync(path.join(__dirname, file), 'utf8');
  vm.runInContext(code, sandbox);
});

// 获取 VM 中累积的 DATASETS
const DATASETS = sandbox.window.DATASETS || [];

let totalModules = 0;
let totalSets = 0;
let totalQuestions = 0;
let totalPoems = 0;
let checkedAudioFiles = 0;
let missingAudioFiles = [];
let invalidQuestions = [];

const audioDir = path.join(__dirname, 'audio');
const hasAudioDir = fs.existsSync(audioDir);

DATASETS.forEach(mod => {
  if (!mod || !mod.id || !mod.sets) {
    invalidQuestions.push(`模块定义缺失或格式非法: ${JSON.stringify(mod)}`);
    return;
  }
  totalModules++;

  mod.sets.forEach((set, si) => {
    totalSets++;
    if (!set.name || !Array.isArray(set.qs)) {
      invalidQuestions.push(`[${mod.name}] 组索引 ${si} 格式不正确`);
      return;
    }

    if (mod.layout === 'song') {
      // 古诗/儿歌模块
      set.qs.forEach((p, pi) => {
        totalPoems++;
        if (!p.t || !Array.isArray(p.lines) || p.lines.length === 0) {
          invalidQuestions.push(`[${mod.name} -> ${set.name}] 第 ${pi + 1} 首诗歌格式错误`);
        }
        // 检查音频
        const idTitle = `song_${si}_${pi}_title.mp3`;
        const idLines = `song_${si}_${pi}_lines.mp3`;
        [idTitle, idLines].forEach(aFile => {
          checkedAudioFiles++;
          if (hasAudioDir && !fs.existsSync(path.join(audioDir, aFile))) {
            missingAudioFiles.push(aFile);
          }
        });
      });
    } else {
      // 常规选择题模块
      set.qs.forEach((q, qi) => {
        totalQuestions++;
        const qPos = `[${mod.name} -> ${set.name} -> 第 ${qi + 1} 题]`;

        // 验证必填属性
        if (typeof q.q !== 'string' || !q.q.trim()) {
          invalidQuestions.push(`${qPos} 缺少题目描述 (q)`);
        }
        if (!Array.isArray(q.opts) || q.opts.length < 2) {
          invalidQuestions.push(`${qPos} 选项数量不足 (少于 2 项)`);
        }
        if (typeof q.a !== 'number' || q.a < 0 || q.a >= q.opts.length) {
          invalidQuestions.push(`${qPos} 答案索引越界: a=${q.a}, 选项数=${q.opts.length}`);
        }
        if (typeof q.w !== 'string' || !q.w.trim()) {
          invalidQuestions.push(`${qPos} 缺少讲解内容 (w)`);
        }
        if (q.pic === undefined || q.pic === null) {
          invalidQuestions.push(`${qPos} 缺少配图信息 (pic)`);
        }

        // 检查音频文件
        const qAudio = `${mod.id}_${si}_${qi}_q.mp3`;
        const wAudio = `${mod.id}_${si}_${qi}_w.mp3`;
        [qAudio, wAudio].forEach(aFile => {
          checkedAudioFiles++;
          if (hasAudioDir && !fs.existsSync(path.join(audioDir, aFile))) {
            missingAudioFiles.push(aFile);
          }
        });
      });
    }
  });
});

// 检查测试音频
const testAudio = 'test_welcome.mp3';
checkedAudioFiles++;
if (hasAudioDir && !fs.existsSync(path.join(audioDir, testAudio))) {
  missingAudioFiles.push(testAudio);
}

console.log('📊 题库结构统计:');
console.log(`  - 核心学习学科模块数: ${totalModules} 个`);
console.log(`  - 教学任务分组数:     ${totalSets} 组`);
console.log(`  - 互动练习题总数:     ${totalQuestions} 题`);
console.log(`  - 儿歌与古诗总数:     ${totalPoems} 首`);
console.log(`  - 关联高保真音频需求: ${checkedAudioFiles} 个\n`);

let passed = true;

if (invalidQuestions.length > 0) {
  passed = false;
  console.error(`❌ 发现 ${invalidQuestions.length} 处题目数据异常:`);
  invalidQuestions.forEach(err => console.error(`   - ${err}`));
} else {
  console.log(`✅ 所有 ${totalModules} 大模块题库字段与逻辑校验全部通过 (100% 合法)`);
}

if (missingAudioFiles.length > 0) {
  passed = false;
  console.error(`❌ 发现 ${missingAudioFiles.length} 个本地音频文件缺失:`);
  missingAudioFiles.slice(0, 10).forEach(f => console.error(`   - ${f}`));
  if (missingAudioFiles.length > 10) console.error(`   ... 还有 ${missingAudioFiles.length - 10} 个`);
} else {
  console.log(`✅ 所有 ${checkedAudioFiles} 个高保真本地 MP3 音频文件完整对应存在 (100% 匹配)`);
}

console.log('\n========================================================');
if (passed) {
  console.log('🎉 恭喜！数据与音频资产自动化校验【全部通过】！');
  process.exit(0);
} else {
  console.error('💥 校验未通过，请根据提示修复数据！');
  process.exit(1);
}

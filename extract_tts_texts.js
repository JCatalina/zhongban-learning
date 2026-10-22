/**
 * 从 data_*.js 提取所有需要生成 TTS 的文本
 * 输出 JSON: { id: string, text: string, lang: string }[]
 */
const fs = require('fs');
const path = require('path');

// 模拟浏览器环境
global.window = { DATASETS: [] };

// 加载所有数据文件
const dataFiles = fs.readdirSync('.').filter(f => f.startsWith('data_') && f.endsWith('.js'));
for (const f of dataFiles) {
  eval(fs.readFileSync(f, 'utf8'));
}

const entries = [];
let idx = 0;

function stripHtml(s) {
  return String(s || '').replace(/<[^>]+>/g, '').trim();
}

function addEntry(id, text, lang) {
  const clean = stripHtml(text);
  if (!clean) return;
  entries.push({ id, text: clean, lang: lang || 'zh-CN' });
}

for (const ds of window.DATASETS) {
  if (ds.layout === 'song') {
    // 古诗儿歌
    for (let si = 0; si < ds.sets.length; si++) {
      const s = ds.sets[si];
      for (let qi = 0; qi < s.qs.length; qi++) {
        const p = s.qs[qi];
        // 标题朗读
        addEntry(`song_${si}_${qi}_title`, p.t, 'zh-CN');
        // 全文跟读
        addEntry(`song_${si}_${qi}_lines`, p.lines.join('，'), 'zh-CN');
      }
    }
  } else {
    // 普通题目
    for (let si = 0; si < ds.sets.length; si++) {
      const s = ds.sets[si];
      for (let qi = 0; qi < s.qs.length; qi++) {
        const q = s.qs[qi];

        // 题目朗读 (q.q + 选项)
        let qText = q.q;
        if (q.opts) {
          const optTexts = q.opts.map(o => {
            if (typeof o === 'string' && o.trim().startsWith('<')) return stripHtml(o);
            return String(o);
          }).filter(Boolean);
          if (optTexts.length) qText += '。请选一选：' + optTexts.join('、');
        }
        const lang = q.lang || 'zh-CN';
        addEntry(`${ds.id}_${si}_${qi}_q`, qText, lang);

        // 讲解朗读 (q.w)
        if (q.w) {
          addEntry(`${ds.id}_${si}_${qi}_w`, q.w, lang);
        }
      }
    }
  }
}

// 试听语音
addEntry('test_welcome', '你好呀，我是小老师！今天我们一起来学习新本领吧。', 'zh-CN');

// 去重
const seen = new Set();
const unique = entries.filter(e => {
  const key = e.id;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

fs.writeFileSync('tts_entries.json', JSON.stringify(unique, null, 2), 'utf8');
console.log('Total TTS entries: ' + unique.length);
console.log('Sample:', JSON.stringify(unique.slice(0, 3), null, 2));

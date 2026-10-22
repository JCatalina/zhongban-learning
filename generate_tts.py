import asyncio
import json
import os
import sys
import edge_tts

import sys

# 避免 Windows 终端 GBK 编码报错
try:
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")
except Exception:
    pass

OUTPUT_DIR = "audio"
ENTRIES_FILE = "tts_entries.json"
VOICE = "zh-CN-XiaoxiaoNeural"
MAX_CONCURRENT = 5
MAX_RETRIES = 3

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(ENTRIES_FILE, "r", encoding="utf-8") as f:
    entries = json.load(f)

total = len(entries)
completed = 0
lock = asyncio.Lock()

async def generate_one(sem, entry):
    global completed
    item_id = entry["id"]
    text = entry["text"]
    out_path = os.path.join(OUTPUT_DIR, f"{item_id}.mp3")

    # 断点续传
    if os.path.exists(out_path) and os.path.getsize(out_path) > 500:
        async with lock:
            completed += 1
            if completed % 20 == 0 or completed == total:
                print(f"[{completed}/{total}] 跳过已存在: {item_id}", flush=True)
        return

    async with sem:
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                communicate = edge_tts.Communicate(text, VOICE)
                await communicate.save(out_path)
                async with lock:
                    completed += 1
                    if completed % 10 == 0 or completed == total:
                        print(f"[{completed}/{total}] 成功生成: {item_id}.mp3", flush=True)
                return
            except Exception as e:
                if attempt == MAX_RETRIES:
                    print(f"[FAIL] ({item_id}): {e}", flush=True)
                else:
                    await asyncio.sleep(1.0)

async def main():
    print(f"=== 开始批量生成音频，共 {total} 个条目，并发数：{MAX_CONCURRENT} ===", flush=True)
    sem = asyncio.Semaphore(MAX_CONCURRENT)
    tasks = [generate_one(sem, entry) for entry in entries]
    await asyncio.gather(*tasks)
    print(f"=== 全部生成任务完成！已完成 {completed}/{total} ===", flush=True)

if __name__ == "__main__":
    asyncio.run(main())

/**
 * 🗣️ 场景口语学堂 · 现代灵动风少儿动画交互引擎 (Duolingo Style Animated Stage)
 * 纯矢量、轻量、高帧率、声画联动、支持触控交互与弹性反馈
 */

(function(){
  'use strict';

  let currentAnimState = 'idle'; // 'idle' | 'speaking' | 'cheer'
  let currentSceneId = null;
  let activeContainer = null;

  // 10 大场景专属 SVG 动态舞台模版
  const SCENE_TEMPLATES = {
    morning: `
      <div class="lottie-character-box morning-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fde047" stop-opacity="0.9"/>
              <stop offset="60%" stop-color="#fbbf24" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="clockBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0284c7"/>
            </linearGradient>
            <linearGradient id="brushGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f43f5e"/>
              <stop offset="100%" stop-color="#be123c"/>
            </linearGradient>
          </defs>

          <!-- 晨光微晕 -->
          <circle cx="140" cy="90" r="85" fill="url(#sunGlow)" class="glow-pulse"/>

          <!-- 太阳公公 (主体) -->
          <g class="sun-char anim-bounce-slow">
            <!-- 旋转光芒 -->
            <g class="sun-rays anim-rotate-slow">
              <line x1="140" y1="30" x2="140" y2="12" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="140" y1="150" x2="140" y2="168" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="80" y1="90" x2="62" y2="90" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="200" y1="90" x2="218" y2="90" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="98" y1="48" x2="85" y2="35" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="182" y1="132" x2="195" y2="145" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="98" y1="132" x2="85" y2="145" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
              <line x1="182" y1="48" x2="195" y2="35" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
            </g>
            <!-- 太阳脸盘 -->
            <circle cx="140" cy="90" r="48" fill="#facc15" stroke="#eab308" stroke-width="4"/>
            <!-- 腮红 -->
            <circle cx="118" cy="100" r="7" fill="#fb7185" opacity="0.75"/>
            <circle cx="162" cy="100" r="7" fill="#fb7185" opacity="0.75"/>
            <!-- 眼睛 -->
            <ellipse cx="124" cy="85" rx="5" ry="7" fill="#1e293b" class="char-eye"/>
            <ellipse cx="156" cy="85" rx="5" ry="7" fill="#1e293b" class="char-eye"/>
            <circle cx="126" cy="83" r="2" fill="#fff"/>
            <circle cx="158" cy="83" r="2" fill="#fff"/>
            <!-- 嘴巴 (开口笑) -->
            <path d="M 128 97 Q 140 115 152 97 Z" fill="#b91c1c" class="char-mouth"/>
          </g>

          <!-- 摇摆小闹钟 -->
          <g class="clock-group anim-wiggle" transform="translate(42, 110)">
            <circle cx="28" cy="12" r="9" fill="#e0e7ff" stroke="#3b82f6" stroke-width="3"/>
            <circle cx="56" cy="12" r="9" fill="#e0e7ff" stroke="#3b82f6" stroke-width="3"/>
            <circle cx="42" cy="40" r="26" fill="url(#clockBody)"/>
            <circle cx="42" cy="40" r="20" fill="#fff"/>
            <line x1="42" y1="40" x2="42" y2="28" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
            <line x1="42" y1="40" x2="52" y2="40" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
            <!-- 闹钟脚 -->
            <line x1="26" y1="62" x2="20" y2="70" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
            <line x1="58" y1="62" x2="64" y2="70" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
          </g>

          <!-- 刷牙彩色小泡泡 -->
          <g class="bubble-group" transform="translate(195, 105)">
            <g class="anim-brush-move">
              <rect x="18" y="25" width="12" height="45" rx="6" fill="url(#brushGrad)"/>
              <rect x="14" y="10" width="20" height="18" rx="4" fill="#38bdf8"/>
              <path d="M 16 10 L 16 2 M 20 10 L 20 2 M 24 10 L 24 2 M 28 10 L 28 2 M 32 10 L 32 2" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            </g>
            <circle cx="10" cy="15" r="7" fill="#67e8f9" opacity="0.75" class="bubble-float-1"/>
            <circle cx="2" cy="35" r="5" fill="#a5f3fc" opacity="0.65" class="bubble-float-2"/>
            <circle cx="36" cy="8" r="6" fill="#c4b5fd" opacity="0.75" class="bubble-float-3"/>
          </g>
        </svg>
        <div class="character-tip">✨ 点我一下，小太阳会给你比心哦～</div>
      </div>
    `,

    breakfast: `
      <div class="lottie-character-box breakfast-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="panGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>
            <linearGradient id="toastGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#fde047"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>

          <!-- 餐桌背景圆底 -->
          <ellipse cx="140" cy="165" rx="110" ry="24" fill="#fef08a" opacity="0.6"/>

          <!-- 烤吐司面包机 (自动跳吐司) -->
          <g transform="translate(35, 75)" class="anim-float">
            <!-- 弹跳吐司 -->
            <g class="anim-toast-jump">
              <rect x="20" y="5" width="38" height="36" rx="6" fill="url(#toastGrad)"/>
              <circle cx="32" cy="22" r="2.5" fill="#78350f"/>
              <circle cx="46" cy="22" r="2.5" fill="#78350f"/>
              <path d="M 35 28 Q 39 34 43 28" stroke="#78350f" stroke-width="2" fill="none"/>
            </g>
            <!-- 机身 -->
            <rect x="10" y="30" width="58" height="50" rx="12" fill="#ec4899"/>
            <rect x="18" y="72" width="8" height="10" rx="3" fill="#be185d"/>
            <rect x="52" y="72" width="8" height="10" rx="3" fill="#be185d"/>
            <rect x="18" y="38" width="42" height="6" rx="3" fill="#831843"/>
            <!-- 旋钮 -->
            <circle cx="39" cy="56" r="6" fill="#fff"/>
          </g>

          <!-- 平底锅荷包蛋 (主体 Q 弹) -->
          <g transform="translate(115, 60)" class="anim-bounce-slow">
            <!-- 锅柄 -->
            <rect x="90" y="58" width="50" height="14" rx="6" fill="#0f172a"/>
            <!-- 锅身 -->
            <ellipse cx="50" cy="65" rx="56" ry="38" fill="url(#panGrad)"/>
            <ellipse cx="50" cy="65" rx="48" ry="32" fill="#334155"/>
            <!-- 蛋白 (Q弹形态) -->
            <path d="M 28 65 Q 35 48 50 48 Q 72 48 76 60 Q 82 78 65 80 Q 38 84 28 65 Z" fill="#f8fafc" class="anim-jelly"/>
            <!-- 蛋黄 (小脸) -->
            <circle cx="52" cy="64" r="15" fill="#f59e0b"/>
            <circle cx="47" cy="60" r="2.5" fill="#fff"/>
            <circle cx="48" cy="63" r="1.5" fill="#78350f"/>
            <circle cx="56" cy="63" r="1.5" fill="#78350f"/>
            <path d="M 50 67 Q 52 71 54 67" stroke="#78350f" stroke-width="1.5" fill="none"/>
          </g>

          <!-- 冒热气的香浓牛奶杯 -->
          <g transform="translate(205, 95)" class="anim-sway">
            <rect x="10" y="20" width="34" height="46" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2.5"/>
            <!-- 杯柄 -->
            <path d="M 44 28 C 54 28 54 50 44 50" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <rect x="14" y="26" width="26" height="34" rx="5" fill="#fff"/>
            <!-- 蒸汽上升 -->
            <path d="M 20 14 Q 24 6 20 -2" fill="none" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round" class="steam-1"/>
            <path d="M 32 14 Q 36 6 32 -2" fill="none" stroke="#93c5fd" stroke-width="2.5" stroke-linecap="round" class="steam-2"/>
          </g>
        </svg>
        <div class="character-tip">😋 煎蛋和吐司跳得好开心！点它一下！</div>
      </div>
    `,

    clothes: `
      <div class="lottie-character-box clothes-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444"/>
              <stop offset="100%" stop-color="#b91c1c"/>
            </linearGradient>
            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#60a5fa"/>
              <stop offset="100%" stop-color="#2563eb"/>
            </linearGradient>
          </defs>

          <!-- 挂衣绳与小外套 -->
          <g transform="translate(45, 20)">
            <line x1="0" y1="20" x2="190" y2="20" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="6,4"/>
            <!-- 摇晃小外套 -->
            <g class="anim-sway" transform="translate(65, 18)">
              <!-- 衣架 -->
              <path d="M 30 0 L 10 16 L 50 16 Z" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
              <path d="M 30 0 C 30 -8 38 -8 38 0" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
              <!-- 外套主体 -->
              <path d="M 12 18 L 48 18 L 56 60 L 4 60 Z" fill="url(#jacketGrad)" rx="4"/>
              <line x1="30" y1="18" x2="30" y2="60" stroke="#1d4ed8" stroke-width="2.5"/>
              <circle cx="30" cy="30" r="3" fill="#facc15"/>
              <circle cx="30" cy="42" r="3" fill="#facc15"/>
              <circle cx="30" cy="54" r="3" fill="#facc15"/>
            </g>
          </g>

          <!-- 跳踢踏舞的两只小红鞋 (主体动态) -->
          <g transform="translate(70, 95)">
            <!-- 左鞋 (欢快踏步) -->
            <g class="anim-tap-left" transform="translate(0, 0)">
              <!-- 袜子 -->
              <rect x="22" y="5" width="20" height="26" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
              <line x1="22" y1="12" x2="42" y2="12" stroke="#3b82f6" stroke-width="3"/>
              <!-- 鞋身 -->
              <path d="M 15 28 L 52 28 C 65 28 68 46 64 52 L 8 52 C 4 44 8 28 15 28 Z" fill="url(#shoeGrad)"/>
              <rect x="6" y="50" width="60" height="10" rx="4" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
              <circle cx="56" cy="44" r="6" fill="#fff"/>
              <circle cx="56" cy="44" r="3" fill="#ef4444"/>
              <path d="M 28 34 L 38 42 M 38 34 L 28 42" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            </g>

            <!-- 右鞋 (交替跳跃) -->
            <g class="anim-tap-right" transform="translate(75, 0)">
              <rect x="22" y="5" width="20" height="26" rx="4" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
              <line x1="22" y1="12" x2="42" y2="12" stroke="#3b82f6" stroke-width="3"/>
              <path d="M 15 28 L 52 28 C 65 28 68 46 64 52 L 8 52 C 4 44 8 28 15 28 Z" fill="url(#shoeGrad)"/>
              <rect x="6" y="50" width="60" height="10" rx="4" fill="#fff" stroke="#cbd5e1" stroke-width="1.5"/>
              <circle cx="56" cy="44" r="6" fill="#fff"/>
              <circle cx="56" cy="44" r="3" fill="#ef4444"/>
              <path d="M 28 34 L 38 42 M 38 34 L 28 42" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            </g>
          </g>

          <!-- 欢快跳舞小音符 -->
          <text x="35" y="145" font-size="22" fill="#ec4899" class="note-float-1">🎵</text>
          <text x="225" y="130" font-size="24" fill="#f59e0b" class="note-float-2">✨</text>
        </svg>
        <div class="character-tip">👟 小红鞋跳起踢踏舞啦！Put on your shoes!</div>
      </div>
    `,

    outdoors: `
      <div class="lottie-character-box outdoors-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 远景小山与浮云 -->
          <ellipse cx="60" cy="140" rx="90" ry="35" fill="#86efac" opacity="0.6"/>
          <ellipse cx="220" cy="145" rx="80" ry="30" fill="#4ade80" opacity="0.5"/>
          <g class="cloud-move">
            <ellipse cx="70" cy="40" rx="26" ry="12" fill="#fff" opacity="0.85"/>
            <circle cx="60" cy="36" r="14" fill="#fff" opacity="0.85"/>
            <circle cx="78" cy="38" r="12" fill="#fff" opacity="0.85"/>
          </g>

          <!-- 快速滑过的路面 -->
          <rect x="0" y="150" width="280" height="40" fill="#64748b"/>
          <line x1="0" y1="170" x2="280" y2="170" stroke="#fef08a" stroke-width="4" stroke-dasharray="24,16" class="road-move"/>

          <!-- 黄色卡通小校车 (车身颠簸动态) -->
          <g class="anim-bus-bump" transform="translate(50, 75)">
            <!-- 车顶警示灯 -->
            <circle cx="85" cy="5" r="5" fill="#ef4444" class="glow-pulse"/>
            <!-- 车身 -->
            <rect x="10" y="10" width="150" height="70" rx="16" fill="#facc15" stroke="#eab308" stroke-width="3"/>
            <!-- 车头弧度 -->
            <path d="M 160 38 L 178 50 C 182 56 182 80 160 80 Z" fill="#facc15" stroke="#eab308" stroke-width="3"/>
            <!-- 黑色条纹 -->
            <rect x="10" y="56" width="160" height="8" fill="#1e293b"/>
            <!-- 车窗与挥手小熊 -->
            <rect x="25" y="20" width="30" height="26" rx="6" fill="#bae6fd"/>
            <rect x="65" y="20" width="30" height="26" rx="6" fill="#bae6fd"/>
            <rect x="105" y="20" width="30" height="26" rx="6" fill="#bae6fd"/>
            <!-- 挡风玻璃 -->
            <path d="M 145 22 L 168 45 L 145 45 Z" fill="#7dd3fc"/>

            <!-- 车窗里的小熊 (挥手) -->
            <g transform="translate(68, 22)">
              <circle cx="15" cy="15" r="11" fill="#b45309"/>
              <circle cx="7" cy="8" r="4" fill="#b45309"/>
              <circle cx="23" cy="8" r="4" fill="#b45309"/>
              <circle cx="12" cy="14" r="2" fill="#000"/>
              <circle cx="18" cy="14" r="2" fill="#000"/>
              <!-- 挥舞小手 -->
              <ellipse cx="25" cy="18" rx="3.5" ry="5" fill="#b45309" class="anim-wave-hand"/>
            </g>

            <!-- 车前大灯 -->
            <circle cx="178" cy="62" r="6" fill="#fef08a"/>

            <!-- 旋转车轮 (双前双后) -->
            <g class="anim-wheel-spin" transform="translate(42, 80)">
              <circle cx="0" cy="0" r="16" fill="#1e293b"/>
              <circle cx="0" cy="0" r="7" fill="#e2e8f0"/>
              <line x1="-7" y1="0" x2="7" y2="0" stroke="#64748b" stroke-width="2"/>
              <line x1="0" y1="-7" x2="0" y2="7" stroke="#64748b" stroke-width="2"/>
            </g>
            <g class="anim-wheel-spin" transform="translate(135, 80)">
              <circle cx="0" cy="0" r="16" fill="#1e293b"/>
              <circle cx="0" cy="0" r="7" fill="#e2e8f0"/>
              <line x1="-7" y1="0" x2="7" y2="0" stroke="#64748b" stroke-width="2"/>
              <line x1="0" y1="-7" x2="0" y2="7" stroke="#64748b" stroke-width="2"/>
            </g>
          </g>
        </svg>
        <div class="character-tip">🚌 哔哔！大黄校车出发啦！小熊在朝你招手呢！</div>
      </div>
    `,

    kindergarten: `
      <div class="lottie-character-box kindergarten-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 幼儿园五彩小彩旗 -->
          <g transform="translate(20, 25)">
            <path d="M 0 10 Q 120 35 240 10" fill="none" stroke="#cbd5e1" stroke-width="2"/>
            <polygon points="25,16 45,18 35,36" fill="#ef4444" class="anim-sway"/>
            <polygon points="75,22 95,23 85,42" fill="#f59e0b" class="anim-sway"/>
            <polygon points="125,24 145,24 135,44" fill="#10b981" class="anim-sway"/>
            <polygon points="175,22 195,21 185,41" fill="#3b82f6" class="anim-sway"/>
            <polygon points="215,16 235,14 225,34" fill="#a855f7" class="anim-sway"/>
          </g>

          <!-- 积木城堡 (主体动态) -->
          <g transform="translate(70, 75)" class="anim-bounce-slow">
            <!-- 底层方块 -->
            <rect x="15" y="55" width="34" height="34" rx="4" fill="#3b82f6"/>
            <rect x="55" y="55" width="34" height="34" rx="4" fill="#10b981"/>
            <rect x="95" y="55" width="34" height="34" rx="4" fill="#f59e0b"/>
            <!-- 拱门 -->
            <path d="M 55 55 A 17 17 0 0 1 89 55 Z" fill="#fff"/>
            <!-- 二层中立柱 -->
            <rect x="35" y="25" width="30" height="30" rx="4" fill="#ec4899"/>
            <rect x="75" y="25" width="30" height="30" rx="4" fill="#8b5cf6"/>
            <!-- 三角屋顶 -->
            <polygon points="50,2 25,25 75,25" fill="#ef4444"/>
            <polygon points="90,2 65,25 115,25" fill="#f97316"/>
            <!-- 屋顶转动小风车 -->
            <g transform="translate(50, 2)" class="anim-rotate-slow">
              <circle cx="0" cy="0" r="4" fill="#fff"/>
              <ellipse cx="0" cy="-14" rx="3.5" ry="10" fill="#fde047"/>
              <ellipse cx="0" cy="14" rx="3.5" ry="10" fill="#38bdf8"/>
              <ellipse cx="-14" cy="0" rx="10" ry="3.5" fill="#4ade80"/>
              <ellipse cx="14" cy="0" rx="10" ry="3.5" fill="#fb7185"/>
            </g>
          </g>

          <!-- 小朋友笑脸气球 -->
          <g transform="translate(210, 65)" class="anim-float">
            <line x1="20" y1="45" x2="20" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
            <ellipse cx="20" cy="25" rx="18" ry="22" fill="#fb7185"/>
            <circle cx="15" cy="20" r="2" fill="#fff"/>
            <circle cx="25" cy="20" r="2" fill="#fff"/>
            <path d="M 16 27 Q 20 32 24 27" stroke="#fff" stroke-width="2" fill="none"/>
          </g>
        </svg>
        <div class="character-tip">🏰 积木城堡搭好啦！一起上幼儿园真快乐！</div>
      </div>
    `,

    play: `
      <div class="lottie-character-box play-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 软萌泰迪熊玩偶 (招手比心) -->
          <g transform="translate(45, 60)" class="anim-sway">
            <!-- 熊耳朵 -->
            <circle cx="35" cy="35" r="13" fill="#b45309"/>
            <circle cx="35" cy="35" r="7" fill="#fde68a"/>
            <circle cx="85" cy="35" r="13" fill="#b45309"/>
            <circle cx="85" cy="35" r="7" fill="#fde68a"/>
            <!-- 熊头 -->
            <ellipse cx="60" cy="55" rx="32" ry="28" fill="#d97706"/>
            <!-- 脸蛋与嘴巴 -->
            <ellipse cx="60" cy="62" rx="15" ry="11" fill="#fef3c7"/>
            <ellipse cx="60" cy="58" rx="4" ry="3" fill="#78350f"/>
            <path d="M 57 63 Q 60 67 63 63" stroke="#78350f" stroke-width="2" fill="none"/>
            <circle cx="48" cy="52" r="3" fill="#1e293b"/>
            <circle cx="72" cy="52" r="3" fill="#1e293b"/>
            <!-- 腮红 -->
            <circle cx="42" cy="60" r="4" fill="#fb7185" opacity="0.6"/>
            <circle cx="78" cy="60" r="4" fill="#fb7185" opacity="0.6"/>
            <!-- 熊身体 -->
            <ellipse cx="60" cy="98" rx="28" ry="24" fill="#d97706"/>
            <ellipse cx="60" cy="98" rx="16" ry="14" fill="#fef3c7"/>
            <!-- 招手小熊爪 -->
            <ellipse cx="25" cy="88" rx="9" ry="11" fill="#b45309" class="anim-wave-hand"/>
            <ellipse cx="95" cy="92" rx="9" ry="11" fill="#b45309"/>
          </g>

          <!-- 高弹跳彩色皮球 (Q弹物理压缩动效) -->
          <g transform="translate(175, 45)" class="anim-ball-bounce">
            <circle cx="35" cy="35" r="32" fill="#ef4444"/>
            <!-- 拼色条纹 -->
            <path d="M 12 18 C 30 15 50 35 48 64 C 35 64 12 50 12 18 Z" fill="#3b82f6"/>
            <path d="M 35 3 C 48 20 52 45 35 67 C 48 67 67 52 67 35 C 67 18 52 3 35 3 Z" fill="#facc15"/>
            <!-- 高光 -->
            <ellipse cx="25" cy="20" rx="8" ry="5" fill="#fff" opacity="0.6" transform="rotate(-30,25,20)"/>
          </g>

          <!-- 弹跳小阴影 -->
          <ellipse cx="210" cy="172" rx="26" ry="7" fill="#cbd5e1" class="anim-shadow-scale"/>
        </svg>
        <div class="character-tip">🧸 拍拍大皮球！小熊伸开双手要跟你一起玩！</div>
      </div>
    `,

    manners: `
      <div class="lottie-character-box manners-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 跳跃闪耀的大爱心 (膨胀收缩) -->
          <g transform="translate(140, 95)" class="anim-heart-beat">
            <!-- 扩散光晕 -->
            <path d="M 0 -25 C -25 -55 -65 -25 -65 10 C -65 40 0 75 0 85 C 0 75 65 40 65 10 C 65 -25 25 -55 0 -25 Z" fill="#fbcfe8" opacity="0.5" class="glow-pulse"/>
            <!-- 主体爱心 -->
            <path d="M 0 -20 C -22 -48 -55 -22 -55 8 C -55 35 0 65 0 75 C 0 65 55 35 55 8 C 55 -22 22 -48 0 -20 Z" fill="#ec4899"/>
            <!-- 爱心上的微笑小脸 -->
            <circle cx="-16" cy="12" r="3.5" fill="#831843"/>
            <circle cx="16" cy="12" r="3.5" fill="#831843"/>
            <circle cx="-22" cy="18" r="4" fill="#fda4af"/>
            <circle cx="22" cy="18" r="4" fill="#fda4af"/>
            <path d="M -8 24 Q 0 32 8 24" stroke="#831843" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </g>

          <!-- 金色大拇指点赞勋章 -->
          <g transform="translate(45, 75)" class="anim-bounce-slow">
            <circle cx="30" cy="30" r="28" fill="#fef08a" stroke="#facc15" stroke-width="3"/>
            <text x="14" y="42" font-size="30">👍</text>
          </g>

          <!-- 闪闪感恩星星 -->
          <g transform="translate(215, 60)" class="anim-float">
            <text x="0" y="0" font-size="28">✨</text>
            <text x="18" y="42" font-size="20">🌟</text>
          </g>
        </svg>
        <div class="character-tip">💖 “Thank you!” 礼貌的小宝贝像红心一样发光！</div>
      </div>
    `,

    emotions: `
      <div class="lottie-character-box emotions-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 热情抱抱小精灵 (双臂开合迎抱抱) -->
          <g transform="translate(140, 105)" class="anim-bounce-slow">
            <!-- 身体 -->
            <ellipse cx="0" cy="0" rx="55" ry="48" fill="#fb923c"/>
            <ellipse cx="0" cy="8" rx="38" ry="30" fill="#fed7aa"/>
            <!-- 萌萌大眼睛 -->
            <ellipse cx="-18" cy="-10" rx="6" ry="8" fill="#1e293b" class="char-eye"/>
            <ellipse cx="18" cy="-10" rx="6" ry="8" fill="#1e293b" class="char-eye"/>
            <circle cx="-16" cy="-12" r="2.5" fill="#fff"/>
            <circle cx="20" cy="-12" r="2.5" fill="#fff"/>
            <!-- 大红脸蛋 -->
            <circle cx="-28" cy="2" r="7" fill="#f43f5e" opacity="0.6"/>
            <circle cx="28" cy="2" r="7" fill="#f43f5e" opacity="0.6"/>
            <!-- 开心大笑嘴 -->
            <path d="M -14 6 Q 0 24 14 6 Z" fill="#991b1b" class="char-mouth"/>

            <!-- 伸开热情抱抱的双臂 (开合动画) -->
            <g class="anim-hug-arms">
              <path d="M -45 -5 C -75 -15 -80 20 -50 15" stroke="#ea580c" stroke-width="12" fill="none" stroke-linecap="round"/>
              <path d="M 45 -5 C 75 -15 80 20 50 15" stroke="#ea580c" stroke-width="12" fill="none" stroke-linecap="round"/>
            </g>
          </g>

          <!-- 快乐彩虹弧线 -->
          <path d="M 50 45 Q 140 -5 230 45" stroke="#f472b6" stroke-width="4" fill="none" opacity="0.75" stroke-linecap="round"/>
          <path d="M 58 50 Q 140 5 222 50" stroke="#facc15" stroke-width="4" fill="none" opacity="0.75" stroke-linecap="round"/>
          <path d="M 66 55 Q 140 15 214 55" stroke="#38bdf8" stroke-width="4" fill="none" opacity="0.75" stroke-linecap="round"/>
        </svg>
        <div class="character-tip">🤗 开心给个大抱抱！I'm happy! Give me a hug!</div>
      </div>
    `,

    dinner: `
      <div class="lottie-character-box dinner-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 整理魔法玩具箱 (自动收纳) -->
          <g transform="translate(40, 75)" class="anim-float">
            <!-- 箱盖微开 -->
            <polygon points="10,25 70,15 65,30 5,38" fill="#f59e0b"/>
            <!-- 箱体 -->
            <rect x="10" y="30" width="65" height="50" rx="8" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
            <rect x="25" y="45" width="35" height="20" rx="4" fill="#fff" opacity="0.5"/>
            <text x="32" y="60" font-size="14">🧸</text>
          </g>

          <!-- 跳进箱子里的小积木 -->
          <g class="anim-block-jump">
            <rect x="120" y="70" width="18" height="18" rx="3" fill="#3b82f6"/>
            <rect x="135" y="55" width="16" height="16" rx="3" fill="#ef4444"/>
            <polygon points="125,45 135,30 145,45" fill="#10b981"/>
          </g>

          <!-- 香喷喷晚餐汤锅 (热气腾腾) -->
          <g transform="translate(170, 75)" class="anim-sway">
            <ellipse cx="45" cy="72" rx="42" ry="12" fill="#e2e8f0"/>
            <!-- 砂锅 -->
            <path d="M 12 40 L 78 40 C 78 70 12 70 12 40 Z" fill="#ef4444"/>
            <rect x="2" y="38" width="12" height="6" rx="2" fill="#b91c1c"/>
            <rect x="76" y="38" width="12" height="6" rx="2" fill="#b91c1c"/>
            <!-- 锅盖与把手 -->
            <path d="M 14 38 Q 45 18 76 38 Z" fill="#f87171"/>
            <circle cx="45" cy="22" r="5" fill="#facc15"/>
            <!-- 飘香热气 -->
            <path d="M 35 15 Q 40 5 35 -5" fill="none" stroke="#fb923c" stroke-width="2.5" stroke-linecap="round" class="steam-1"/>
            <path d="M 52 15 Q 58 5 52 -5" fill="none" stroke="#fb923c" stroke-width="2.5" stroke-linecap="round" class="steam-2"/>
          </g>
        </svg>
        <div class="character-tip">🍲 晚餐喷喷香，玩具收纳好！Clean up, let's eat!</div>
      </div>
    `,

    bedtime: `
      <div class="lottie-character-box bedtime-stage" onclick="SceneAnimManager.tickle()">
        <svg viewBox="0 0 280 200" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- 深蓝静谧夜空晕光 -->
          <circle cx="140" cy="100" r="88" fill="#1e1b4b" opacity="0.25"/>

          <!-- 摇篮月亮公公 (戴睡帽、微闭双眼左右轻摇) -->
          <g transform="translate(135, 95)" class="anim-moon-cradle">
            <!-- 弯弯月亮 -->
            <path d="M 0 -55 C 35 -55 58 -25 58 10 C 58 45 35 75 0 75 C 28 60 38 30 38 10 C 38 -15 25 -45 0 -55 Z" fill="#facc15"/>
            <!-- 睫毛闭眼 (甜睡表情) -->
            <path d="M 32 6 Q 37 14 42 6" stroke="#854d0e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <!-- 微笑小嘴 -->
            <path d="M 32 24 Q 38 30 42 24" stroke="#854d0e" stroke-width="2" fill="none" stroke-linecap="round"/>
            <!-- 柔和腮红 -->
            <circle cx="28" cy="18" r="5" fill="#fb7185" opacity="0.6"/>

            <!-- 可爱条纹睡帽 -->
            <g transform="translate(8, -58) rotate(-15)">
              <polygon points="0,15 25,15 35,-25" fill="#38bdf8"/>
              <line x1="8" y1="2" x2="30" y2="-5" stroke="#fff" stroke-width="3.5"/>
              <circle cx="35" cy="-25" r="6" fill="#fff"/>
              <ellipse cx="12" cy="15" rx="14" ry="4" fill="#fff"/>
            </g>
          </g>

          <!-- 闪闪眨眼小星星 (三颗位置各异，明暗闪烁) -->
          <g class="star-group">
            <g class="anim-star-twinkle-1" transform="translate(48, 45)">
              <polygon points="12,0 15,8 24,9 17,15 19,24 12,19 5,24 7,15 0,9 9,8" fill="#fde047"/>
            </g>
            <g class="anim-star-twinkle-2" transform="translate(225, 65)">
              <polygon points="10,0 13,7 20,8 15,13 16,20 10,16 4,20 6,13 0,8 7,7" fill="#fef08a"/>
            </g>
            <g class="anim-star-twinkle-3" transform="translate(65, 135)">
              <polygon points="8,0 10,5 16,6 12,10 13,16 8,13 3,16 5,10 0,6 6,5" fill="#fde047"/>
            </g>
          </g>

          <!-- 梦境泡泡 Zzz 缓缓飘出 -->
          <g class="anim-zzz-drift" transform="translate(180, 50)">
            <text x="0" y="0" font-family="'Comic Sans MS', cursive" font-size="16" font-weight="900" fill="#a5b4fc">z</text>
            <text x="12" y="-12" font-family="'Comic Sans MS', cursive" font-size="20" font-weight="900" fill="#818cf8">Z</text>
            <text x="26" y="-28" font-family="'Comic Sans MS', cursive" font-size="26" font-weight="900" fill="#6366f1">Z</text>
          </g>
        </svg>
        <div class="character-tip">🌙 嘘～月亮公公睡着啦！Good night, sweet dreams!</div>
      </div>
    `
  };

  // 动画控制核心管理器
  window.SceneAnimManager = {
    mount: function(containerId, sceneId) {
      currentSceneId = sceneId || 'morning';
      const container = document.getElementById(containerId);
      if (!container) return;
      activeContainer = container;

      // 提取场景对应模版（若无则兜底 morning）
      const html = SCENE_TEMPLATES[currentSceneId] || SCENE_TEMPLATES.morning;
      container.innerHTML = html;
      this.setSpeaking(false);
    },

    setSpeaking: function(isSpeaking) {
      currentAnimState = isSpeaking ? 'speaking' : 'idle';
      if (!activeContainer) return;
      const box = activeContainer.querySelector('.lottie-character-box');
      if (!box) return;

      if (isSpeaking) {
        box.classList.add('is-speaking');
        box.classList.remove('is-idle');
      } else {
        box.classList.remove('is-speaking');
        box.classList.add('is-idle');
      }
    },

    tickle: function() {
      if (!activeContainer) return;
      const box = activeContainer.querySelector('.lottie-character-box');
      if (!box) return;

      // 播放清脆啵啵弹性音效
      try {
        if (typeof window.sfx === 'function') window.sfx(true);
      } catch(e) {}

      // 触发多邻国式果冻弹性变形
      box.classList.remove('anim-tickle-pop');
      void box.offsetWidth; // 触发 reflow
      box.classList.add('anim-tickle-pop');

      // 冒出爱心与笑脸提示
      if (typeof window.toast === 'function') {
        const cheers = ['咯咯咯～好痒呀！😄', '真棒！大声跟我读一遍吧～🌟', '加油小达人！你读得真好听！👏'];
        window.toast(cheers[Math.floor(Math.random() * cheers.length)]);
      }
    },

    cheer: function() {
      if (!activeContainer) return;
      const box = activeContainer.querySelector('.lottie-character-box');
      if (!box) return;

      box.classList.add('is-cheering');
      setTimeout(() => {
        box.classList.remove('is-cheering');
      }, 2000);
    }
  };

})();

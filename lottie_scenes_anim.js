/**
 * 🗣️ 场景口语学堂 · 100句专属动作灵动少儿动画引擎 (Duolingo Style 100 Action Stages)
 * 纯矢量、轻量、高帧率、每句专属独立动作、声画联动、支持触控交互与弹性反馈
 * 彻底消除生僻 Emoji 豆腐块与限制长方形缺陷，100% 严格对照真实台词 1:1 精准配图！
 */

(function(){
  'use strict';

  let activeContainer = null;
  let currentSentId = 's1';

  // 全量 100 句专属动作模板库 (零豆腐块、纯矢量与真实台词精准匹配)
  const ACTION_TEMPLATES = {
    s1: `
    <div class="lottie-character-box action-stage-s1" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#facc15" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#facc15" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s1)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#facc15" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">☀️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#facc15" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#facc15" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#facc15" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 太阳公公升起来啦，挥挥小手说早上好！</div>
    </div>
  `,
    s2: `
    <div class="lottie-character-box action-stage-s2" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s2)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏰</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🔔</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 小闹钟响啦，掀开被子起床起得早！</div>
    </div>
  `,
    s3: `
    <div class="lottie-character-box action-stage-s3" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s3)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">☀️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🏡</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 拉开窗帘，指着窗外金色大太阳！</div>
    </div>
  `,
    s4: `
    <div class="lottie-character-box action-stage-s4" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s4)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐱</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 像小猫咪一样把小手举高高伸个懒腰！</div>
    </div>
  `,
    s5: `
    <div class="lottie-character-box action-stage-s5" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s5)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 清凉水盆与捧起的水花 -->
      <ellipse cx="24" cy="36" rx="20" ry="7" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <!-- 飞溅的小水滴与水花 -->
      <path d="M24 10 C24 10, 16 22, 16 26 C16 30, 20 34, 24 34 C28 34, 32 30, 32 26 C32 22, 24 10, 24 10 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <!-- 侧边跳跃小水滴 -->
      <circle cx="10" cy="18" r="3" fill="#38bdf8"/>
      <circle cx="38" cy="16" r="3.5" fill="#38bdf8"/>
      <circle cx="30" cy="8" r="2" fill="#0284c7"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 温温的毛巾捧起水，小脸蛋洗得白又净！</div>
    </div>
  `,
    s6: `
    <div class="lottie-character-box action-stage-s6" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s6" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s6)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 粉红香皂条 -->
      <rect x="10" y="28" width="28" height="14" rx="6" fill="#f472b6" stroke="#db2777" stroke-width="2"/>
      <path d="M16 32 L32 32" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
      <!-- 七彩肥皂泡泡大中小 -->
      <circle cx="18" cy="14" r="9" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2" opacity="0.9"/>
      <path d="M14 11 A 5 5 0 0 1 18 9" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <circle cx="34" cy="18" r="6" fill="#fce7f3" stroke="#f472b6" stroke-width="1.5" opacity="0.9"/>
      <circle cx="28" cy="7" r="4" fill="#fef08a" stroke="#eab308" stroke-width="1.5" opacity="0.9"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 香皂搓出香喷喷的泡泡，把细菌全赶跑！</div>
    </div>
  `,
    s7: `
    <div class="lottie-character-box action-stage-s7" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s7" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s7)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 牙刷手柄 (天蓝) -->
      <path d="M8 42 L24 26 C26 24, 29 24, 31 26 L34 29 C36 31, 36 34, 34 36 L18 52" fill="none" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/>
      <!-- 刷头底座与白色刷毛 -->
      <rect x="24" y="8" width="16" height="13" rx="3" fill="#fff" stroke="#38bdf8" stroke-width="2"/>
      <path d="M28 8 L28 14 M32 8 L32 14 M36 8 L36 14" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
      <!-- 薄荷蓝牙膏膏体 -->
      <path d="M22 10 C26 5, 34 5, 38 10" fill="#38bdf8"/>
      <!-- 亮晶晶闪烁泡泡 -->
      <circle cx="42" cy="6" r="3" fill="#fff" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="38" cy="3" r="1.5" fill="#38bdf8"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 上上下下、里里外外，刷出一口雪白小牙齿！</div>
    </div>
  `,
    s8: `
    <div class="lottie-character-box action-stage-s8" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s8" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s8)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0ea5e9" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 挂毛巾杆 -->
      <rect x="6" y="8" width="36" height="4" rx="2" fill="#94a3b8"/>
      <!-- 折叠条纹毛巾 -->
      <path d="M12 10 L12 40 C12 42, 16 44, 20 44 L28 44 C32 44, 36 42, 36 40 L36 10 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2"/>
      <!-- 浅色可爱条纹 -->
      <path d="M12 20 L36 20 M12 26 L36 26 M12 32 L36 32" stroke="#fff" stroke-width="2" opacity="0.7"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0ea5e9" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0ea5e9" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 小手小脸用柔软毛巾擦擦干，真舒服！</div>
    </div>
  `,
    s9: `
    <div class="lottie-character-box action-stage-s9" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s9" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s9)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 梳子手柄与背部 -->
      <path d="M6 14 C6 8, 12 6, 22 6 L40 6 C44 6, 46 9, 46 14 L46 22 C46 25, 43 28, 38 28 L6 28 Z" fill="#f43f5e" rx="4"/>
      <!-- 细密梳齿 -->
      <path d="M10 28 L10 42 M15 28 L15 42 M20 28 L20 42 M25 28 L25 42 M30 28 L30 42 M35 28 L35 42 M40 28 L40 42" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
      <!-- 梳背高光反光线 -->
      <path d="M12 12 L36 12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
      <!-- 可爱小金星装饰 -->
      <circle cx="38" cy="18" r="2.5" fill="#fef08a"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 照照小镜子，小木梳理顺头发整整齐齐！</div>
    </div>
  `,
    s10: `
    <div class="lottie-character-box action-stage-s10" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s10" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s10)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😊</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 洗漱完毕神清气爽，精神百倍迎接新一天！</div>
    </div>
  `,
    s11: `
    <div class="lottie-character-box action-stage-s11" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s11" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s11)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍽️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 摸摸咕噜噜小肚子，告诉妈妈该开饭啦！</div>
    </div>
  `,
    s12: `
    <div class="lottie-character-box action-stage-s12" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s12" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s12)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💧</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☕</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 口渴啦，请给我倒一杯温开水！</div>
    </div>
  `,
    s13: `
    <div class="lottie-character-box action-stage-s13" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s13" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s13)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 玻璃杯身 -->
      <path d="M12 12 L15 42 C15 44, 18 46, 24 46 C30 46, 33 44, 33 42 L36 12 Z" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
      <!-- 白牛奶液面 -->
      <path d="M14 22 L15 41 C15 43, 18 44, 24 44 C30 44, 33 43, 33 41 L34 22 Z" fill="#fff"/>
      <!-- 红色吸管 -->
      <path d="M26 44 L26 14 L34 6" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <circle cx="28" cy="28" r="1.5" fill="#93c5fd"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍼</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 咕嘟咕嘟喝牛奶，嘴边留下一圈白胡子！</div>
    </div>
  `,
    s14: `
    <div class="lottie-character-box action-stage-s14" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s14" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s14)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🍞</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍳</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 金黄烤面包配爱心煎蛋，营养满分！</div>
    </div>
  `,
    s15: `
    <div class="lottie-character-box action-stage-s15" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s15" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s15)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👍</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 大口咀嚼细嚼慢咽，真好吃呀！</div>
    </div>
  `,
    s16: `
    <div class="lottie-character-box action-stage-s16" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s16" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s16)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🍎</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🙋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 想吃水果礼貌问大人：我可以吃个苹果吗？</div>
    </div>
  `,
    s17: `
    <div class="lottie-character-box action-stage-s17" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s17" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s17)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🍲</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍚</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 小碗吃光光啦，我还想要加一点！</div>
    </div>
  `,
    s18: `
    <div class="lottie-character-box action-stage-s18" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s18" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s18)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#64748b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">✋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">😊</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#64748b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#64748b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#64748b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 小手轻轻摇一摇：吃饱了，谢谢您！</div>
    </div>
  `,
    s19: `
    <div class="lottie-character-box action-stage-s19" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s19" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#94a3b8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s19)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#94a3b8" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 纸巾盒 -->
      <rect x="8" y="24" width="32" height="18" rx="4" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <ellipse cx="24" cy="24" rx="8" ry="2.5" fill="#1d4ed8"/>
      <!-- 抽出的折叠小餐巾纸 -->
      <path d="M16 24 C16 16, 20 8, 24 8 C28 8, 32 16, 32 24 Z" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#94a3b8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#94a3b8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#94a3b8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#94a3b8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 吃完饭抽出一张餐巾纸，轻轻擦干净小嘴巴！</div>
    </div>
  `,
    s20: `
    <div class="lottie-character-box action-stage-s20" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s20" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s20)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 拍拍满足的小肚皮：我吃得饱饱的啦！</div>
    </div>
  `,
    s21: `
    <div class="lottie-character-box action-stage-s21" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s21" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s21)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 彩色条纹短袜 -->
      <path d="M14 8 L24 8 L24 24 C24 26, 28 32, 36 32 C40 32, 42 36, 40 40 C38 44, 32 44, 26 42 C18 39, 14 30, 14 24 Z" fill="#f43f5e" stroke="#be123c" stroke-width="2"/>
      <path d="M14 14 L24 14 M14 20 L24 20" stroke="#fde047" stroke-width="2"/>
      <circle cx="32" cy="38" r="2" fill="#fff"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 套上一对暖融融的花袜子，暖暖和和！</div>
    </div>
  `,
    s22: `
    <div class="lottie-character-box action-stage-s22" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s22" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s22)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 红色帆布球鞋 -->
      <path d="M8 28 C8 24, 12 18, 22 18 L26 22 L38 24 C44 26, 44 34, 40 38 L8 38 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
      <!-- 白色橡胶鞋底 -->
      <rect x="6" y="38" width="36" height="5" rx="2" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- 白色鞋头与鞋带 -->
      <path d="M34 26 C38 28, 42 32, 42 38 L32 38 Z" fill="#fff"/>
      <path d="M22 22 L26 26 M24 20 L28 24" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 分清左右脚，穿好帅气的红色小球鞋！</div>
    </div>
  `,
    s23: `
    <div class="lottie-character-box action-stage-s23" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s23" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s23)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👕</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❄️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 外面风大，穿上暖和的连帽大外套！</div>
    </div>
  `,
    s24: `
    <div class="lottie-character-box action-stage-s24" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s24" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s24)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">❓</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎩</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 咦？我的小帽子跑哪儿去了呢？四处找找看！</div>
    </div>
  `,
    s25: `
    <div class="lottie-character-box action-stage-s25" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s25" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s25)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎩</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎉</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 哇！在沙发靠垫上找到了帽子，高兴举起来！</div>
    </div>
  `,
    s26: `
    <div class="lottie-character-box action-stage-s26" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s26" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s26)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 两侧拉链齿轨道 -->
      <path d="M20 6 L20 44 M28 6 L28 44" stroke="#64748b" stroke-width="2" stroke-dasharray="2,2"/>
      <!-- 金色拉链滑块 -->
      <rect x="18" y="18" width="12" height="12" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
      <!-- 下垂金色拉环 -->
      <path d="M24 30 L24 38 M21 38 L27 38" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
      <circle cx="24" cy="38" r="3" fill="#fef08a" stroke="#b45309" stroke-width="1"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👕</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 拉链拉拉拉，一直拉到领口最保暖！</div>
    </div>
  `,
    s27: `
    <div class="lottie-character-box action-stage-s27" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s27" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s27)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 双肩小书包包身 -->
      <rect x="12" y="14" width="24" height="28" rx="8" fill="#06b6d4" stroke="#0891b2" stroke-width="2"/>
      <!-- 前拉链口袋 -->
      <rect x="16" y="24" width="16" height="14" rx="4" fill="#67e8f9" stroke="#0891b2" stroke-width="1.5"/>
      <!-- 顶部提手 -->
      <path d="M18 14 C18 8, 30 8, 30 14" fill="none" stroke="#0891b2" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 侧兜小水壶 -->
      <rect x="8" y="22" width="4" height="12" rx="1.5" fill="#f59e0b"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎒</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 装好水壶小手帕，背上心爱的双肩小书包！</div>
    </div>
  `,
    s28: `
    <div class="lottie-character-box action-stage-s28" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s28" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s28)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#64748b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚪</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⏱️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#64748b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#64748b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#64748b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 站在门口整理好：宝贝你准备好了吗？</div>
    </div>
  `,
    s29: `
    <div class="lottie-character-box action-stage-s29" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s29" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s29)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 大声自信回应：是的，我准备好啦！</div>
    </div>
  `,
    s30: `
    <div class="lottie-character-box action-stage-s30" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s30" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s30)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚶</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☀️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 推开大门迎着阳光，我们出发吧！</div>
    </div>
  `,
    s31: `
    <div class="lottie-character-box action-stage-s31" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s31" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s31)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👫</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 在马路上紧紧牵着大人的手最安全！</div>
    </div>
  `,
    s32: `
    <div class="lottie-character-box action-stage-s32" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s32" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#facc15" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#facc15" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s32)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#facc15" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚌</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👀</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#facc15" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#facc15" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#facc15" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 指着开过去的黄色大巴士惊叹：好大一辆车！</div>
    </div>
  `,
    s33: `
    <div class="lottie-character-box action-stage-s33" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s33" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s33)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🔴</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 红灯亮起停一停，斑马线前站站好！</div>
    </div>
  `,
    s34: `
    <div class="lottie-character-box action-stage-s34" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s34" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s34)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🟢</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 绿灯亮起向前走，稳稳当当过斑马线！</div>
    </div>
  `,
    s35: `
    <div class="lottie-character-box action-stage-s35" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s35" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s35)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#64748b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚗</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#64748b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#64748b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#64748b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 观察马路上车辆飞驰：小汽车开得好快呀！</div>
    </div>
  `,
    s36: `
    <div class="lottie-character-box action-stage-s36" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s36" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s36)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0ea5e9" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">☁️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☀️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0ea5e9" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0ea5e9" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 抬头看看蓝蓝的天空，飘着洁白的云朵！</div>
    </div>
  `,
    s37: `
    <div class="lottie-character-box action-stage-s37" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s37" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s37)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐦</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌳</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 树枝上停着小鸟，叽叽喳喳在唱歌！</div>
    </div>
  `,
    s38: `
    <div class="lottie-character-box action-stage-s38" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s38" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s38)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#d97706" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐶</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#d97706" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐾</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#d97706" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#d97706" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#d97706" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 路边摇着小尾巴的毛茸茸小狗真可爱！</div>
    </div>
  `,
    s39: `
    <div class="lottie-character-box action-stage-s39" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s39" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s39)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌸</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👃</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 弯下腰闻一闻花坛的花朵，香喷喷的！</div>
    </div>
  `,
    s40: `
    <div class="lottie-character-box action-stage-s40" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s40" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s40)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🏫</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐻</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 走到幼儿园门口，向小熊老师鞠躬问好！</div>
    </div>
  `,
    s41: `
    <div class="lottie-character-box action-stage-s41" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s41" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s41)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🏃</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 在绿草地上像小旋风一样飞快奔跑！</div>
    </div>
  `,
    s42: `
    <div class="lottie-character-box action-stage-s42" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s42" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s42)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐰</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 像小兔子一样双脚跳跃，扑通跳上跳下！</div>
    </div>
  `,
    s43: `
    <div class="lottie-character-box action-stage-s43" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s43" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s43)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-26, -26)">
      <!-- 滑梯爬梯立柱与横档 -->
      <path d="M10 50 L10 16 M6 42 L14 42 M6 34 L14 34 M6 26 L14 26" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
      <!-- 滑梯顶端安全圆顶 -->
      <circle cx="10" cy="14" r="5" fill="#f59e0b"/>
      <!-- 黄红双色弯曲顺滑滑道 -->
      <path d="M10 16 C18 16, 22 28, 32 38 C38 45, 46 48, 52 48" fill="none" stroke="#e11d48" stroke-width="7" stroke-linecap="round"/>
      <path d="M10 16 C18 16, 22 28, 32 38 C38 45, 46 48, 52 48" fill="none" stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round"/>
      <!-- 底部安全小地垫 -->
      <ellipse cx="48" cy="48" rx="6" ry="2" fill="#10b981"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 排好队，一步步爬上黄色大滑梯台阶！</div>
    </div>
  `,
    s44: `
    <div class="lottie-character-box action-stage-s44" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s44" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s44)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-26, -26)">
      <!-- 滑梯爬梯立柱与横档 -->
      <path d="M10 50 L10 16 M6 42 L14 42 M6 34 L14 34 M6 26 L14 26" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
      <!-- 滑梯顶端安全圆顶 -->
      <circle cx="10" cy="14" r="5" fill="#f59e0b"/>
      <!-- 黄红双色弯曲顺滑滑道 -->
      <path d="M10 16 C18 16, 22 28, 32 38 C38 45, 46 48, 52 48" fill="none" stroke="#e11d48" stroke-width="7" stroke-linecap="round"/>
      <path d="M10 16 C18 16, 22 28, 32 38 C38 45, 46 48, 52 48" fill="none" stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round"/>
      <!-- 底部安全小地垫 -->
      <ellipse cx="48" cy="48" rx="6" ry="2" fill="#10b981"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎉</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 呜呼！顺着滑梯嗖的一下滑到底，真过瘾！</div>
    </div>
  `,
    s45: `
    <div class="lottie-character-box action-stage-s45" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s45" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s45)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 秋千横梁与吊绳 -->
      <path d="M6 8 L42 8 M14 8 L16 38 M34 8 L32 38" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 木板坐垫 -->
      <rect x="12" y="38" width="24" height="5" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
      <circle cx="16" cy="38" r="1.5" fill="#b45309"/>
      <circle cx="32" cy="38" r="1.5" fill="#b45309"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 抓紧秋千两根绳子，请好朋友轻轻推一把！</div>
    </div>
  `,
    s46: `
    <div class="lottie-character-box action-stage-s46" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s46" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s46)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎈</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☁️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 秋千高高荡起，越来越高像小鸟飞上半空！</div>
    </div>
  `,
    s47: `
    <div class="lottie-character-box action-stage-s47" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s47" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s47)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⚽</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 双手准备好，目不转睛接住飞来的皮球！</div>
    </div>
  `,
    s48: `
    <div class="lottie-character-box action-stage-s48" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s48" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s48)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⚽</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 抬起小脚丫用力一踢，皮球滚进球门里！</div>
    </div>
  `,
    s49: `
    <div class="lottie-character-box action-stage-s49" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s49" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s49)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👭</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎈</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 招招小手热情邀请：我们大家一起玩吧！</div>
    </div>
  `,
    s50: `
    <div class="lottie-character-box action-stage-s50" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s50" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s50)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 排队遵守游戏规则：现在轮到我啦！</div>
    </div>
  `,
    s51: `
    <div class="lottie-character-box action-stage-s51" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s51" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s51)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙏</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 请求帮助或递物品时，礼貌说声请！</div>
    </div>
  `,
    s52: `
    <div class="lottie-character-box action-stage-s52" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s52" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s52)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎁</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">😊</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 收到别人帮助或礼物，甜甜说声谢谢你！</div>
    </div>
  `,
    s53: `
    <div class="lottie-character-box action-stage-s53" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s53" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s53)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😊</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 别人说谢谢时，大方微笑着说不用谢！</div>
    </div>
  `,
    s54: `
    <div class="lottie-character-box action-stage-s54" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s54" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s54)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#6366f1" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#6366f1" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚶</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#6366f1" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#6366f1" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#6366f1" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 借过或请人注意时，礼貌说声不好意思！</div>
    </div>
  `,
    s55: `
    <div class="lottie-character-box action-stage-s55" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s55" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s55)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😢</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🙇</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 不小心碰到别人，立刻真诚道歉说对不起！</div>
    </div>
  `,
    s56: `
    <div class="lottie-character-box action-stage-s56" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s56" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s56)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😊</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 原谅别人无心之过：没关系，不用介意！</div>
    </div>
  `,
    s57: `
    <div class="lottie-character-box action-stage-s57" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s57" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s57)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚗</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👫</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 礼貌询问小伙伴：我可以跟你一起分享吗？</div>
    </div>
  `,
    s58: `
    <div class="lottie-character-box action-stage-s58" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s58" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s58)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎁</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 双手把心爱的玩具递过去：给你玩吧！</div>
    </div>
  `,
    s59: `
    <div class="lottie-character-box action-stage-s59" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s59" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s59)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 木靠背与横档 -->
      <path d="M12 6 L12 28 M12 10 L36 10 M12 18 L36 18 M36 6 L36 28" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 黄色软垫座面 -->
      <rect x="8" y="26" width="32" height="6" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
      <!-- 四条坚固椅腿 -->
      <path d="M12 32 L12 44 M36 32 L36 44 M16 32 L16 42 M32 32 L32 42" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 轻轻拉开小椅子，端端正正坐好！</div>
    </div>
  `,
    s60: `
    <div class="lottie-character-box action-stage-s60" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s60" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s60)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 听到小口令，小手放裤线整齐起立！</div>
    </div>
  `,
    s61: `
    <div class="lottie-character-box action-stage-s61" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s61" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s61)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😄</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 手舞足蹈满脸笑容：今天我好开心呀！</div>
    </div>
  `,
    s62: `
    <div class="lottie-character-box action-stage-s62" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s62" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s62)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😿</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 温柔关心哭鼻子的小伙伴：你难过了吗？</div>
    </div>
  `,
    s63: `
    <div class="lottie-character-box action-stage-s63" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s63" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s63)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">❄️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⛄</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 觉得有点冷，告诉老师妈妈添件暖背心！</div>
    </div>
  `,
    s64: `
    <div class="lottie-character-box action-stage-s64" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s64" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s64)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">☀️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 跑得满头大汗：好热呀喝口水吃个冰淇淋！</div>
    </div>
  `,
    s65: `
    <div class="lottie-character-box action-stage-s65" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s65" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s65)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚽</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🙋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 想小便勇敢大声举手：我要去上洗手间！</div>
    </div>
  `,
    s66: `
    <div class="lottie-character-box action-stage-s66" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s66" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s66)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😣</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❤️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 双手捂住小肚肚揉揉：我的肚子有点不舒服！</div>
    </div>
  `,
    s67: `
    <div class="lottie-character-box action-stage-s67" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s67" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s67)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 十字创口贴 (米黄色) -->
      <rect x="8" y="19" width="32" height="10" rx="3" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <rect x="19" y="8" width="10" height="32" rx="3" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
      <!-- 中心透气小红心垫片 -->
      <circle cx="24" cy="24" r="4" fill="#f43f5e"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 小手指着磕碰的膝盖：这里碰疼啦！</div>
    </div>
  `,
    s68: `
    <div class="lottie-character-box action-stage-s68" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s68" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s68)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💨</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 妈妈温柔在伤口上吹吹气：痛痛飞走啦！</div>
    </div>
  `,
    s69: `
    <div class="lottie-character-box action-stage-s69" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s69" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s69)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐻</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❤️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 张开大大的双臂，扑进爸爸妈妈温暖的怀抱！</div>
    </div>
  `,
    s70: `
    <div class="lottie-character-box action-stage-s70" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s70" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s70)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 亲亲妈妈的脸颊：爸爸妈妈我超级爱你！</div>
    </div>
  `,
    s71: `
    <div class="lottie-character-box action-stage-s71" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s71" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s71)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐷</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌸</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 佩奇动画经典开场第一句：我是小猪佩奇！</div>
    </div>
  `,
    s72: `
    <div class="lottie-character-box action-stage-s72" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s72" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s72)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👢</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 穿上黄色小雨靴，我最爱跳泥坑啦！</div>
    </div>
  `,
    s73: `
    <div class="lottie-character-box action-stage-s73" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s73" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s73)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💦</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☔</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 扑通扑通！在雨靴下踩出欢快的大水花！</div>
    </div>
  `,
    s74: `
    <div class="lottie-character-box action-stage-s74" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s74" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#16a34a" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#16a34a" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s74)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#16a34a" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐲</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#16a34a" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐾</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#16a34a" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#16a34a" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#16a34a" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 乔治抱着绿色恐龙大叫：大恐龙嗷呜！</div>
    </div>
  `,
    s75: `
    <div class="lottie-character-box action-stage-s75" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s75" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s75)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😆</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👏</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 太好笑啦！全家人倒在地上哈哈大笑！</div>
    </div>
  `,
    s76: `
    <div class="lottie-character-box action-stage-s76" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s76" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s76)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙈</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🔍</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 捉迷藏数到十睁开眼睛：我来找你们啦！</div>
    </div>
  `,
    s77: `
    <div class="lottie-character-box action-stage-s77" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s77" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s77)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#1d4ed8" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐾</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#1d4ed8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#1d4ed8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#1d4ed8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#1d4ed8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 莱德队长召集狗狗们：汪汪队要出动啦！</div>
    </div>
  `,
    s78: `
    <div class="lottie-character-box action-stage-s78" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s78" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s78)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐶</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👮</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 勇敢警犬阿奇敬个礼：包在阿奇身上！</div>
    </div>
  `,
    s79: `
    <div class="lottie-character-box action-stage-s79" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s79" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s79)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚒</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 消防小狗毛毛出击：我热情满满准备救援！</div>
    </div>
  `,
    s80: `
    <div class="lottie-character-box action-stage-s80" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s80" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s80)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚁</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 直升机飞行员天天翻跟头：让我们飞上蓝天！</div>
    </div>
  `,
    s81: `
    <div class="lottie-character-box action-stage-s81" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s81" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s81)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏰</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">📦</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 收拾音乐响起，活动结束送玩具回家啦！</div>
    </div>
  `,
    s82: `
    <div class="lottie-character-box action-stage-s82" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s82" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s82)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">📦</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚗</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 把玩具小车整齐放进黄色大收纳箱！</div>
    </div>
  `,
    s83: `
    <div class="lottie-character-box action-stage-s83" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s83" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s83)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🟡</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🖐️</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 弯腰把地上的积木全捡起来，一块不落！</div>
    </div>
  `,
    s84: `
    <div class="lottie-character-box action-stage-s84" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s84" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s84)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🏆</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 拍拍小胸脯自豪地说：我自己独立能做到！</div>
    </div>
  `,
    s85: `
    <div class="lottie-character-box action-stage-s85" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s85" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s85)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 箱子太重搬不动，礼貌请同伴帮忙抬一把！</div>
    </div>
  `,
    s86: `
    <div class="lottie-character-box action-stage-s86" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s86" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s86)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💖</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">😊</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 别人伸出援手搭了把手，真诚说声谢谢！</div>
    </div>
  `,
    s87: `
    <div class="lottie-character-box action-stage-s87" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s87" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s87)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#64748b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏳</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✋</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#64748b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#64748b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#64748b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 学会耐心等待：请稍等一分钟哦！</div>
    </div>
  `,
    s88: `
    <div class="lottie-character-box action-stage-s88" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s88" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s88)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👂</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👩</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 安静竖起小耳朵，专心听妈妈说！</div>
    </div>
  `,
    s89: `
    <div class="lottie-character-box action-stage-s89" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s89" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s89)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚶</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👣</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 走路看着脚下，下台阶一步一步慢慢走！</div>
    </div>
  `,
    s90: `
    <div class="lottie-character-box action-stage-s90" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s90" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s90)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👍</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 收拾得整整齐齐，妈妈给大大的赞：真能干！</div>
    </div>
  `,
    s91: `
    <div class="lottie-character-box action-stage-s91" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s91" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s91)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#6366f1" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌙</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#6366f1" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🏡</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#6366f1" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#6366f1" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#6366f1" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 太阳公公下山啦，外面夜幕悄悄降临！</div>
    </div>
  `,
    s92: `
    <div class="lottie-character-box action-stage-s92" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s92" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s92)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌙</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 抬头看看窗外一闪一闪亮晶晶的小星斗！</div>
    </div>
  `,
    s93: `
    <div class="lottie-character-box action-stage-s93" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s93" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s93)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
            
          <!-- 专属纯 SVG 动作图元 (免字体依赖，杜绝长方形方框) -->
          <g transform="translate(-24, -24)">
      <!-- 床头板与小床架 -->
      <path d="M6 16 L6 42 M42 24 L42 42" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
      <!-- 软绵绵白枕头 -->
      <rect x="10" y="20" width="12" height="8" rx="3" fill="#fff" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- 蓝色棉花糖被子 -->
      <rect x="18" y="22" width="24" height="18" rx="4" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
      <path d="M22 28 L38 28" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </g>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌙</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 脱下小拖鞋，钻进软软暖和的小被窝！</div>
    </div>
  `,
    s94: `
    <div class="lottie-character-box action-stage-s94" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s94" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s94)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">📖</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐻</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 依偎在妈妈怀里，读一本温馨睡前绘本！</div>
    </div>
  `,
    s95: `
    <div class="lottie-character-box action-stage-s95" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s95" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#eab308" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s95)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💡</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌙</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 轻轻关上床头小台灯，房间暗下来休息啦！</div>
    </div>
  `,
    s96: `
    <div class="lottie-character-box action-stage-s96" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s96" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s96)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💋</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 妈妈在额头上轻轻落下一个温柔的晚安吻！</div>
    </div>
  `,
    s97: `
    <div class="lottie-character-box action-stage-s97" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s97" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s97)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">❤️</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👨‍👩‍👧</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 睡前轻声表达爱意：爸爸妈妈我爱你们！</div>
    </div>
  `,
    s98: `
    <div class="lottie-character-box action-stage-s98" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s98" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s98)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#64748b" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😴</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#64748b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💤</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#64748b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#64748b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#64748b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 盖好暖暖的棉被，晚安安睡做个好梦！</div>
    </div>
  `,
    s99: `
    <div class="lottie-character-box action-stage-s99" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s99" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s99)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#a855f7" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😴</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#a855f7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌙</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#a855f7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#a855f7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#a855f7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 长长的睫毛垂下来，闭上小眼睛进入梦乡！</div>
    </div>
  `,
    s100: `
    <div class="lottie-character-box action-stage-s100" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s100" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s100)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或阴影) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中：定位层与动效层解耦) -->
        <g transform="translate(140, 95)">
          <g class="anim-bounce-slow">
            <!-- 动作主角底盘/身体 -->
            <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
            
          <!-- 中心专属动作图元大特写 (经典高兼容字符) -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌈</text>
            
            <!-- 配套专属小道具/动作反馈 -->
            <g transform="translate(38, -20)">
              <g class="anim-wiggle">
                <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
              </g>
            </g>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌟 梦见糖果城堡和小飞象，做个甜甜的美梦！</div>
    </div>
  `
  };

  // 动画控制核心管理器
  window.SceneAnimManager = {
    mount: function(containerId, sceneId, sentId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      activeContainer = container;

      // 提取句子专属 ID (支持 sentId 字符串或传入 sent 对象)
      let sid = 's1';
      if (typeof sentId === 'string') sid = sentId;
      else if (sentId && sentId.id) sid = sentId.id;
      else if (sceneId && typeof sceneId === 'string' && sceneId.startsWith('s')) sid = sceneId;

      currentSentId = sid;

      // 精准提取专属模板 (若无则兜底 s1)
      const html = ACTION_TEMPLATES[sid] || ACTION_TEMPLATES.s1;
      container.innerHTML = html;
      this.setSpeaking(false);
    },

    setSpeaking: function(isSpeaking) {
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

      // 播放清脆弹性音效
      try {
        if (typeof window.sfx === 'function') window.sfx(true);
      } catch(e) {}

      // 触发多邻国式果冻弹性变形
      box.classList.remove('anim-tickle-pop');
      void box.offsetWidth; // 触发 reflow
      box.classList.add('anim-tickle-pop');

      // 冒出童趣鼓励
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

  // 暴露模板键列表以供自检
  window.SceneAnimManager._keys = Object.keys(ACTION_TEMPLATES);

})();

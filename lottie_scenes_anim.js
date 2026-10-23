/**
 * 🗣️ 场景口语学堂 · 100句专属动作灵动少儿动画引擎 (Duolingo Style 100 Action Stages)
 * 纯矢量、轻量、高帧率、每句专属独立动作、声画联动、支持触控交互与弹性反馈
 */

(function(){
  'use strict';

  let activeContainer = null;
  let currentSentId = 's1';

  // 全量 100 句专属动作模板库
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#facc15" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌅</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☀️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#facc15" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#facc15" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#facc15" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌅 金色小太阳升起来啦！挥挥小手说早上好！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏰</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🔔</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⏰ 叮铃铃！小闹钟响啦，掀开小被子起床咯！</div>
    </div>
  `,
    s3: `
    <div class="lottie-character-box action-stage-s3" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s3)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#60a5fa" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪟</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#60a5fa" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☀️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#60a5fa" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#60a5fa" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#60a5fa" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪟 拉开浅蓝小窗帘，看窗外金色大太阳！</div>
    </div>
  `,
    s4: `
    <div class="lottie-character-box action-stage-s4" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s4)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐱</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🙆</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🐱 伸个大大的懒腰！像小猫咪一样把小手举高高！</div>
    </div>
  `,
    s5: `
    <div class="lottie-character-box action-stage-s5" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s5)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧼</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💧</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧼 捧起清凉水花洗脸蛋，小水滴欢快跳跃！</div>
    </div>
  `,
    s6: `
    <div class="lottie-character-box action-stage-s6" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s6" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s6)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🫧</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧼</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🫧 粉红香皂搓一搓，漫天都是七彩香喷喷泡泡！</div>
    </div>
  `,
    s7: `
    <div class="lottie-character-box action-stage-s7" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s7" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s7)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪥</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🦷</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪥 上上下下里里外外，刷出一口雪白亮晶晶小牙齿！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0ea5e9" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧣</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧖</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0ea5e9" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0ea5e9" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧣 柔软条纹小毛巾擦擦干，小脸蛋干爽又舒服！</div>
    </div>
  `,
    s9: `
    <div class="lottie-character-box action-stage-s9" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s9" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s9)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#d97706" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪞</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#d97706" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💇</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#d97706" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#d97706" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#d97706" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪞 照照小镜子，木梳轻轻理顺每一根小头发！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⭐</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⭐ 白白净净神采奕奕，双手大拇指给最棒的自己点赞！</div>
    </div>
  `,
    s11: `
    <div class="lottie-character-box action-stage-s11" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s11" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s11)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😋</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍽️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😋 肚子饿得咕噜噜叫啦，摸摸扁扁的小肚子！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💧</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🥛</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💧 咕咚咕咚倒满一杯温水，口渴快喝水！</div>
    </div>
  `,
    s13: `
    <div class="lottie-character-box action-stage-s13" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s13" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s13)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥛</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🥛</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥛 双手捧起大牛奶杯咕嘟大口喝，嘴边有一圈白胡子！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🍳</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍞</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🍳 金黄荷包蛋和香喷喷吐司在盘子里快乐跳跃！</div>
    </div>
  `,
    s15: `
    <div class="lottie-character-box action-stage-s15" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s15" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s15)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😋</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍓</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😋 舔舔嘴角，真是太美味太好吃啦！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🍎</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🍏</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🍎 双手捧着大红苹果，礼貌问大人我能吃一个吗？</div>
    </div>
  `,
    s17: `
    <div class="lottie-character-box action-stage-s17" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s17" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s17)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#d97706" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥣</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#d97706" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🥄</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#d97706" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#d97706" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#d97706" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥣 伸出小碗和小勺，我还想要多一点美味！</div>
    </div>
  `,
    s18: `
    <div class="lottie-character-box action-stage-s18" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s18" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s18)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙏</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👋</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🙏 小手左右摇一摇，吃饱啦礼貌婉拒！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#94a3b8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧻</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#94a3b8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👄</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#94a3b8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#94a3b8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#94a3b8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧻 白色餐巾纸擦干净小嘴巴，干干净净好习惯！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🤰</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🤰 吃得饱饱的，轻轻拍拍圆滚滚满足的小肚皮！</div>
    </div>
  `,
    s21: `
    <div class="lottie-character-box action-stage-s21" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s21" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s21)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#6366f1" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧦</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#6366f1" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🦶</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#6366f1" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#6366f1" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#6366f1" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧦 彩色花纹小袜子穿上脚丫，暖暖和和！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👟</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👟</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👟 脚后跟蹬进红白运动鞋，踢踏踢踏踩整齐！</div>
    </div>
  `,
    s23: `
    <div class="lottie-character-box action-stage-s23" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s23" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s23)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#2563eb" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧥</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#2563eb" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧥</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#2563eb" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#2563eb" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#2563eb" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧥 穿上暖和的蓝色连帽大外套，不怕外面吹冷风！</div>
    </div>
  `,
    s24: `
    <div class="lottie-character-box action-stage-s24" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s24" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s24)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">❓</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧢</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">❓ 咦？我的小帽子跑哪儿去了呢？四处找找看！</div>
    </div>
  `,
    s25: `
    <div class="lottie-character-box action-stage-s25" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s25" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s25)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧢</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎉</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧢 哇！在沙发靠垫上找到了帽子，高兴举起来！</div>
    </div>
  `,
    s26: `
    <div class="lottie-character-box action-stage-s26" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s26" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s26)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#d97706" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🤐</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#d97706" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧥</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#d97706" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#d97706" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#d97706" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🤐 金色小拉链从肚子嗖的一下拉到领口，拉紧保暖！</div>
    </div>
  `,
    s27: `
    <div class="lottie-character-box action-stage-s27" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s27" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s27)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎒</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎒</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🎒 提起黄色双肩小书包，稳稳背上两个小肩膀！</div>
    </div>
  `,
    s28: `
    <div class="lottie-character-box action-stage-s28" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s28" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s28)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏱️</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚪</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⏱️ 小闹钟滴答滴答，大人在门口问你准备好没有？</div>
    </div>
  `,
    s29: `
    <div class="lottie-character-box action-stage-s29" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s29" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s29)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💪</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚀</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💪 戴好帽子穿好鞋，大声回答我准备好啦！</div>
    </div>
  `,
    s30: `
    <div class="lottie-character-box action-stage-s30" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s30" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s30)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚪</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🏃</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚪 推开大门，踏向阳光，出发去幼儿园咯！</div>
    </div>
  `,
    s31: `
    <div class="lottie-character-box action-stage-s31" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s31" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s31)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🤝</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✋</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🤝 过马路牵紧大人的大手，安全第一名！</div>
    </div>
  `,
    s32: `
    <div class="lottie-character-box action-stage-s32" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s32" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s32)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚌</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚍</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚌 看！好大一辆双层大巴车开过去啦，车轮转动！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🔴</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🛑</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🔴 红灯亮起来，红底小手掌示意停下等待！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🟢</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚶</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🟢 绿灯亮起，绿色小人迈大步稳稳走斑马线！</div>
    </div>
  `,
    s35: `
    <div class="lottie-character-box action-stage-s35" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s35" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s35)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚗</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚗 蓝色小汽车开得好快呀，带起一阵欢快的小风！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0ea5e9" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">☁️</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌤️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0ea5e9" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0ea5e9" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">☁️ 仰头看蓝天白云，晴空万里好心情！</div>
    </div>
  `,
    s37: `
    <div class="lottie-character-box action-stage-s37" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s37" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s37)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐦</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌿</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🐦 树枝上有一只小红鸟在叽叽喳喳唱歌！</div>
    </div>
  `,
    s38: `
    <div class="lottie-character-box action-stage-s38" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s38" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s38)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐶</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🦴</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🐶 小金毛狗狗吐着小舌头，摇着尾巴真可爱！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌸</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌺</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌸 草地旁开满了五彩缤纷的小鲜花，好漂亮！</div>
    </div>
  `,
    s40: `
    <div class="lottie-character-box action-stage-s40" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s40" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s40)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎨</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌈</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🎨 调色板上的红黄蓝在变戏法，这是什么颜色？</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🏃</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🏃 像小旋风一样在绿草地上飞快奔跑！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🦘</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💦</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🦘 佩奇踩水坑经典动作：双脚跳上跳下欢呼！</div>
    </div>
  `,
    s43: `
    <div class="lottie-character-box action-stage-s43" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s43" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s43)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🛝</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🪜</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🛝 排好队，一步步爬上黄色大滑梯台阶！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎢</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎉</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🎢 哧溜一下滑下来咯！双手举高大欢呼！</div>
    </div>
  `,
    s45: `
    <div class="lottie-character-box action-stage-s45" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s45" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#d97706" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#d97706" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s45)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#d97706" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪵</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#d97706" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🤲</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#d97706" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#d97706" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#d97706" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪵 抓紧秋千两根绳子，请爸爸在背后推一把！</div>
    </div>
  `,
    s46: `
    <div class="lottie-character-box action-stage-s46" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s46" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s46)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪁</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">☁️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪁 秋千荡得越来越高，像小鸟一样飞上半空！</div>
    </div>
  `,
    s47: `
    <div class="lottie-character-box action-stage-s47" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s47" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s47)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⚽</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🤲</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⚽ 双手张开，稳稳接住空中飞来的彩色大球！</div>
    </div>
  `,
    s48: `
    <div class="lottie-character-box action-stage-s48" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s48" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s48)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥅</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⚽</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥅 抬起右脚用力一踢，把足球精准踢进球门！</div>
    </div>
  `,
    s49: `
    <div class="lottie-character-box action-stage-s49" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s49" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s49)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👭</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🤝</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👭 小伙伴手拉手围成圆圈，一起玩最快乐！</div>
    </div>
  `,
    s50: `
    <div class="lottie-character-box action-stage-s50" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s50" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s50)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎠</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎡</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🎠 游乐场旋转木马彩旗飞扬，真是太好玩啦！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👋</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">😊</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👋 见到好伙伴，热情挥舞小手打招呼！</div>
    </div>
  `,
    s52: `
    <div class="lottie-character-box action-stage-s52" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s52" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s52)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💬</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❓</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💬 头顶冒出交朋友对话泡泡：你叫什么名字呀？</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🏷️</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🏷️ 胸前戴着金色小名牌，自信介绍我的名字！</div>
    </div>
  `,
    s54: `
    <div class="lottie-character-box action-stage-s54" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s54" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s54)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🎁</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧸</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🎁 双手把可爱的小玩具递给同伴：给你拿好！</div>
    </div>
  `,
    s55: `
    <div class="lottie-character-box action-stage-s55" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s55" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s55)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💖</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❤️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💖 双手贴在胸前，大声说非常感谢你！</div>
    </div>
  `,
    s56: `
    <div class="lottie-character-box action-stage-s56" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s56" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s56)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#06b6d4" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😊</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#06b6d4" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌸</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#06b6d4" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#06b6d4" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#06b6d4" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😊 微微点头微笑回复：不用客气哦！</div>
    </div>
  `,
    s57: `
    <div class="lottie-character-box action-stage-s57" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s57" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s57)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙇</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧱</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🙇 不小心碰倒积木，低下头双手抱歉真诚道歉！</div>
    </div>
  `,
    s58: `
    <div class="lottie-character-box action-stage-s58" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s58" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s58)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🤝</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌟</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🤝 两只小手紧紧握一握，没关系我们还是好朋友！</div>
    </div>
  `,
    s59: `
    <div class="lottie-character-box action-stage-s59" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s59" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s59)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🔄</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👉</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🔄 轮盘指针转过来，排队轮到你啦！</div>
    </div>
  `,
    s60: `
    <div class="lottie-character-box action-stage-s60" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s60" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s60)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧸</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🚂</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧸 两个人一起玩大积木小火车，学会分享最棒！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😄</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✌️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😄 蹦蹦跳跳比剪刀手，今天心里乐开花！</div>
    </div>
  `,
    s62: `
    <div class="lottie-character-box action-stage-s62" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s62" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s62)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥺</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧸</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥺 温柔摸摸掉眼泪小熊的头，不要难过啦！</div>
    </div>
  `,
    s63: `
    <div class="lottie-character-box action-stage-s63" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s63" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s63)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#60a5fa" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥶</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#60a5fa" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❄️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#60a5fa" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#60a5fa" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#60a5fa" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥶 双手抱臂打冷颤，哈出呼呼白气！</div>
    </div>
  `,
    s64: `
    <div class="lottie-character-box action-stage-s64" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s64" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s64)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🥵</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🪭</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🥵 太阳好晒好热，手里拿着小风扇呼呼吹风！</div>
    </div>
  `,
    s65: `
    <div class="lottie-character-box action-stage-s65" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s65" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s65)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0ea5e9" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚽</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧻</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0ea5e9" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0ea5e9" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0ea5e9" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚽 夹紧小腿举手报告：老师我要去上厕所啦！</div>
    </div>
  `,
    s66: `
    <div class="lottie-character-box action-stage-s66" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s66" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s66)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😣</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🩹</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😣 双手捂住小肚皮揉揉，肚子有点不舒服！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🤕</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🩹</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🤕 小手指着磕破的小膝盖，这里碰疼了！</div>
    </div>
  `,
    s68: `
    <div class="lottie-character-box action-stage-s68" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s68" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s68)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌬️</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌬️ 妈妈俯下身轻轻吹吹仙气，吹一吹就不疼啦！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🫂</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❤️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🫂 张开大大的双臂，扑进爸爸妈妈温暖的怀抱！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💋</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💋 亲亲妈妈的脸颊，说出最甜最暖的爱！</div>
    </div>
  `,
    s71: `
    <div class="lottie-character-box action-stage-s71" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s71" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f472b6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f472b6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s71)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f472b6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🐷</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f472b6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐽</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f472b6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f472b6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f472b6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🐷 我是小猪佩奇！粉红圆圆鼻子哼哼叫！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#eab308" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👢</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#eab308" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💦</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#eab308" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#eab308" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#eab308" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👢 穿上黄色高筒雨靴，我最喜欢踩泥坑啦！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💦</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌊</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💦 扑哧扑哧扑通扑通，踩出漫天泥水花！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#16a34a" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🦖</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#16a34a" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐾</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#16a34a" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#16a34a" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#16a34a" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🦖 乔治举起绿色霸王龙大吼：Grrr嗷呜！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😆</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🤣</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😆 佩奇全家四口倒在草地上笑得仰面朝天！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🙈</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👀</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🙈 捉迷藏数到十推开双手：我来找你们啦！</div>
    </div>
  `,
    s77: `
    <div class="lottie-character-box action-stage-s77" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s77" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s77)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚨</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐾</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚨 汪汪队出动大救援！金色狗狗爪爪徽章发光！</div>
    </div>
  `,
    s78: `
    <div class="lottie-character-box action-stage-s78" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s78" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s78)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#2563eb" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👮</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#2563eb" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐕</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#2563eb" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#2563eb" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#2563eb" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👮 警犬阿奇戴上大檐警帽，帅气敬礼接任务！</div>
    </div>
  `,
    s79: `
    <div class="lottie-character-box action-stage-s79" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s79" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#dc2626" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#dc2626" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s79)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#dc2626" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚒</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#dc2626" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧯</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#dc2626" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#dc2626" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#dc2626" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚒 消防犬毛毛身后水枪喷出七色彩虹水柱！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🚁</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✈️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🚁 飞行员天天展开粉色机翼，在蓝天翻跟头！</div>
    </div>
  `,
    s81: `
    <div class="lottie-character-box action-stage-s81" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s81" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0d9488" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0d9488" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s81)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0d9488" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏰</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0d9488" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🔔</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0d9488" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0d9488" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0d9488" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⏰ 游戏结束啦，时钟打铃该收拾玩具归位咯！</div>
    </div>
  `,
    s82: `
    <div class="lottie-character-box action-stage-s82" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s82" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s82)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">📦</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧸</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">📦 打开黄色大收纳箱，积木玩偶一件件送回家！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🧱</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#3b82f6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🖐️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#3b82f6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#3b82f6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🧱 弯腰捡起散落在地板上的小积木，一块不落！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#10b981" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🦸</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#10b981" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">✨</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#10b981" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#10b981" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#10b981" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🦸 拍拍小胸脯，我自己能独立做得到！</div>
    </div>
  `,
    s85: `
    <div class="lottie-character-box action-stage-s85" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s85" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s85)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f97316" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🆘</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f97316" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🤝</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f97316" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f97316" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f97316" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🆘 箱子太重抬不动，招手请求大人搭一把手！</div>
    </div>
  `,
    s86: `
    <div class="lottie-character-box action-stage-s86" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s86" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s86)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💌</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">❤️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💌 两人一起放好箱子，双手合十感谢热心帮助！</div>
    </div>
  `,
    s87: `
    <div class="lottie-character-box action-stage-s87" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s87" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s87)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#0284c7" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">⏳</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#0284c7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⌛</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#0284c7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#0284c7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#0284c7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">⏳ 玻璃沙漏细沙缓缓流下，请耐心等待一分钟！</div>
    </div>
  `,
    s88: `
    <div class="lottie-character-box action-stage-s88" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s88" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s88)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#8b5cf6" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👂</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🐰</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#8b5cf6" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👂 竖起兔子般机灵的小耳朵，安静专心听妈妈说！</div>
    </div>
  `,
    s89: `
    <div class="lottie-character-box action-stage-s89" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s89" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s89)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🪜</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">👣</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🪜 手扶好楼梯扶手，慢慢下台阶小心不摔跤！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ef4444" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💮</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ef4444" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🎖️</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ef4444" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ef4444" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ef4444" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💮 做得很棒！胸前贴上闪亮小红花小帮手奖章！</div>
    </div>
  `,
    s91: `
    <div class="lottie-character-box action-stage-s91" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s91" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s91)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#1e1b4b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌆</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#1e1b4b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🌃</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#1e1b4b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#1e1b4b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#1e1b4b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌆 夕阳落山夜幕降临，窗外天色变暗啦！</div>
    </div>
  `,
    s92: `
    <div class="lottie-character-box action-stage-s92" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s92" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#facc15" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#facc15" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s92)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#facc15" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌙</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#facc15" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">⭐</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#facc15" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#facc15" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#facc15" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌙 看看窗外弯弯的月亮公公和闪烁的星星！</div>
    </div>
  `,
    s93: `
    <div class="lottie-character-box action-stage-s93" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s93" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s93)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🛏️</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🧸</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🛏️ 脱下拖鞋钻进棉花糖般暖和的小被窝！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f59e0b" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">📖</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f59e0b" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🏰</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f59e0b" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f59e0b" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f59e0b" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">📖 靠在妈妈怀里，翻开睡前故事绘本听童话！</div>
    </div>
  `,
    s95: `
    <div class="lottie-character-box action-stage-s95" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s95" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#e2e8f0" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#e2e8f0" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s95)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#e2e8f0" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💡</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#e2e8f0" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🔌</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#e2e8f0" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#e2e8f0" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#e2e8f0" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💡 咔哒一声按灭暖黄床头台灯，房间变暗咯！</div>
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

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#ec4899" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">💋</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#ec4899" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">😘</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#ec4899" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#ec4899" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#ec4899" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">💋 妈妈在额头上轻轻落下一个甜甜的晚安吻！</div>
    </div>
  `,
    s97: `
    <div class="lottie-character-box action-stage-s97" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s97" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s97)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#f43f5e" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👨‍👩‍👧</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#f43f5e" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💖</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#f43f5e" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#f43f5e" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#f43f5e" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👨‍👩‍👧 闭眼前对爸爸妈妈说：我好爱你们！</div>
    </div>
  `,
    s98: `
    <div class="lottie-character-box action-stage-s98" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s98" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s98)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#38bdf8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">😴</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🛌</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#38bdf8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#38bdf8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#38bdf8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">😴 盖好蓬松柔软的小被子，安详香甜入睡！</div>
    </div>
  `,
    s99: `
    <div class="lottie-character-box action-stage-s99" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s99" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#94a3b8" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s99)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#94a3b8" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">👀</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#94a3b8" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">💤</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#94a3b8" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#94a3b8" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#94a3b8" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">👀 长长的睫毛垂下来，闭上眼睛进入梦乡！</div>
    </div>
  `,
    s100: `
    <div class="lottie-character-box action-stage-s100" onclick="SceneAnimManager.tickle()">
      <svg viewBox="0 0 280 190" class="stage-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow_s100" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- 背景柔和晕光 -->
        <circle cx="140" cy="95" r="75" fill="url(#glow_s100)" class="glow-pulse"/>

        <!-- 场景环境轻微装饰 (地板或窗户) -->
        <ellipse cx="140" cy="155" rx="85" ry="18" fill="#e2e8f0" opacity="0.5"/>

        <!-- 核心动作主角与专属道具 (动态居中) -->
        <g transform="translate(140, 95)" class="anim-bounce-slow">
          <!-- 动作主角底盘/身体 -->
          <circle cx="0" cy="0" r="42" fill="#fff" stroke="#a855f7" stroke-width="4"/>
          <!-- 中心专属动作图元大特写 -->
          <text x="0" y="16" font-size="44" text-anchor="middle" class="action-icon">🌈</text>
          
          <!-- 配套专属小道具/动作反馈 -->
          <g class="anim-wiggle" transform="translate(38, -20)">
            <circle cx="0" cy="0" r="14" fill="#a855f7" opacity="0.2"/>
            <text x="0" y="6" font-size="16" text-anchor="middle">🦄</text>
          </g>
        </g>

        <!-- 动态漂浮情景装饰星/气泡 -->
        <g class="anim-float">
          <circle cx="50" cy="50" r="6" fill="#a855f7" opacity="0.6"/>
          <circle cx="230" cy="65" r="8" fill="#a855f7" opacity="0.5"/>
          <circle cx="65" cy="130" r="4" fill="#a855f7" opacity="0.6"/>
        </g>
      </svg>
      <div class="character-tip">🌈 梦境泡泡飘出：梦见彩色糖果城堡和飞天小象！</div>
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

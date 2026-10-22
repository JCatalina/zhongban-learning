/* 数学动画讲解组件库（Remotion Compositions）
   每个组件接收当道题的具体参数（数字、图案、关系），
   在浏览器里用播放器实时渲染，逐帧演示解题过程。
   布局约束：画布 720x405，底部约 50px 被播放器控件覆盖，所有文字避开。 */
import React from 'react';
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const FONT = '"PingFang SC","Microsoft YaHei",-apple-system,sans-serif';
const INK = '#4b3f32';
const ORANGE = '#f97316';
const BLUE = '#3b82f6';
const GREEN = '#10b981';
const PINK = '#ec4899';

/* ---------- 通用小组件 ---------- */
function Pop({ at, children, style, delay = 0 }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - at - delay, fps, config: { damping: 13, stiffness: 150 } });
  const o = interpolate(frame - delay, [at, at + 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ opacity: o, transform: `scale(${0.4 + 0.6 * p})`, ...style }}>{children}</div>;
}

/* 字幕：绝对定位到指定 top，避免多条字幕互相覆盖 */
function Caption({ at, children, size = 34, color = INK, bold = true, top = 20, width = '100%' }) {
  return (
    <Pop at={at} style={{ width }}>
      <div style={{
        position: 'absolute', left: 0, right: 0, top, textAlign: 'center',
        padding: '0 20px', boxSizing: 'border-box',
      }}>
        <div style={{
          fontFamily: FONT, fontSize: size, fontWeight: bold ? 900 : 700,
          color, lineHeight: 1.35, letterSpacing: 1,
        }}>
          {children}
        </div>
      </div>
    </Pop>
  );
}

function Bg({ emo = ['🌈', '⭐', '🎈'] }) {
  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(150deg,#fff7e6 0%,#ffeef4 55%,#e7f5ff 100%)',
      fontFamily: FONT,
    }}>
      {emo.map((e, i) => (
        <div key={i} style={{ position: 'absolute', fontSize: 46, opacity: 0.16, left: `${8 + i * 38}%`, top: `${12 + (i % 2) * 62}%` }}>{e}</div>
      ))}
    </AbsoluteFill>
  );
}

function StarBurst({ at, count = 8 }) {
  const frame = useCurrentFrame();
  const stars = ['⭐', '🎉', '✨', '💛', '🌟'];
  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {Array.from({ length: count }).map((_, i) => {
        const a = at + i * 3;
        const p = spring({ frame: frame - a, fps: 30, config: { damping: 11, stiffness: 130 } });
        const ang = (i / count) * Math.PI * 2;
        const dist = 55 + 65 * p;
        return (
          <div key={i} style={{
            position: 'absolute', left: '50%', top: '44%', fontSize: 26,
            transform: `translate(-50%,-50%) translate(${Math.cos(ang) * dist}px,${Math.sin(ang) * dist}px) scale(${p})`,
            opacity: interpolate(frame, [a, a + 26], [0, 1], { extrapolateRight: 'clamp' }),
          }}>{stars[i % stars.length]}</div>
        );
      })}
    </AbsoluteFill>
  );
}

function EmojiChip({ x, y, emoji, size = 62 }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: size + 16, height: size + 16,
      background: '#fff', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 3px 10px rgba(0,0,0,.10)', fontSize: size,
    }}>{emoji}</div>
  );
}

/* 公式条（放在 y≈286，避开底部控件） */
function Pill({ at, children, y = 286, color = '#fff7e6', fs = 32 }) {
  return (
    <Pop at={at}>
      <div style={{
        position: 'absolute', left: '50%', top: y, transform: 'translateX(-50%)', whiteSpace: 'nowrap',
        background: color, border: '4px solid' + (color === '#fff7e6' ? ' #f0d9b0' : ' #ffffff00'),
        borderRadius: 999, padding: '8px 24px', fontFamily: FONT, fontSize: fs, fontWeight: 900, color: INK,
        boxShadow: '0 6px 16px rgba(0,0,0,.12)',
      }}>{children}</div>
    </Pop>
  );
}

/* ---------- 1. 加法：合起来 ---------- */
export function AddAnim(props) {
  const { a, b, emoji } = props;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const itemW = 66;
  const total = (a + b) * itemW + 70;
  const x0 = (720 - total) / 2, y = 150;
  const g1x = (i) => x0 + i * itemW;
  const g2x = (i) => x0 + a * itemW + 70 + i * itemW;
  const C0 = 26, C1 = C0 + a * 16 + 8, C2 = C1 + b * 16 + 16, C3 = C2 + (a + b) * 13 + 12;
  return (
    <AbsoluteFill>
      <Bg />
      <Caption at={8} size={36} top={12}>🧮 我们做加法啦！把两堆「合起来」</Caption>
      {Array.from({ length: a }).map((_, i) => (
        <Pop key={'a' + i} at={C0 + i * 16}>
          <EmojiChip x={g1x(i)} y={y} emoji={emoji} />
        </Pop>
      ))}
      {Array.from({ length: b }).map((_, i) => (
        <Pop key={'b' + i} at={C1 + i * 16}>
          <EmojiChip x={g2x(i)} y={y} emoji={emoji} />
        </Pop>
      ))}
      <Pop at={C0 - 6}>
        <div style={{ position: 'absolute', left: x0 + a * itemW + 18, top: y + 14, fontSize: 52, fontWeight: 900, color: ORANGE }}>＋</div>
      </Pop>
      {/* 逐一数数 */}
      {Array.from({ length: a + b }).map((_, j) => {
        const at = C2 + j * 13;
        const isLast = j === a + b - 1;
        const x = (j < a ? g1x(j) : g2x(j - a)) + 30;
        return (
          <Pop key={'c' + j} at={at}>
            <div style={{
              position: 'absolute', left: x - 18, top: y - 52, width: 36, textAlign: 'center',
              fontFamily: FONT, fontSize: 30, fontWeight: 900, color: isLast ? '#ef4444' : INK,
            }}>{j + 1}</div>
          </Pop>
        );
      })}
      {frame > C3 ? (
        <AbsoluteFill>
          <Pop at={C3}>
            <div style={{ position: 'absolute', left: 306, top: 240, fontSize: 60, fontWeight: 900, color: INK }}>＝</div>
          </Pop>
          <Pop at={C3 + 10}>
            {(() => { const p = spring({ frame: frame - (C3 + 10), fps, config: { damping: 9, stiffness: 120 } }); return (
              <div style={{ position: 'absolute', left: 410, top: 226, fontSize: 96, fontWeight: 900, color: '#ef4444', transform: `scale(${p})` }}>{a + b}</div>
            ); })()}
          </Pop>
          <StarBurst at={C3 + 14} />
          <Caption at={C3 + 30} size={28} color={GREEN} top={78}>
            合起来就是加法：{a}＋{b}＝{a + b}！
          </Caption>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 2. 减法：变少了 ---------- */
export function SubAnim(props) {
  const { a, b, emoji, mode = 'eat' } = props;
  const frame = useCurrentFrame();
  const itemW = Math.min(66, 600 / Math.max(a, 6));
  const x0 = (720 - a * itemW) / 2, y = 128;
  const C0 = 24, C1 = C0 + a * 14 + 20, C2 = C1 + b * 36 + 14;
  const remain = (j) => a - 1 - j;
  const modeStyle = (j, t0) => {
    const pr = interpolate(frame, [t0, t0 + 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.in(Easing.cubic) });
    const base = { position: 'absolute', left: x0 + j * itemW, top: y, opacity: 1 - pr };
    if (mode === 'eat') return { ...base, transform: `scale(${1 - pr}) rotate(${-50 * pr}deg)` };
    if (mode === 'fly') return { ...base, transform: `translateY(${-110 * pr}px) rotate(${25 * pr}deg)` };
    if (mode === 'swim') return { ...base, transform: `translateX(${170 * pr}px)` };
    if (mode === 'give') return { ...base, transform: `translateX(${-170 * pr}px) rotate(${-20 * pr}deg)` };
    return base;
  };
  return (
    <AbsoluteFill>
      <Bg emo={['🍪', '🎈']} />
      <Caption at={8} size={36} top={12}>➖ 我们做减法啦！看一看「变少了」</Caption>
      {frame < C2 ? (
        <Caption at={16} size={26} color="#a58c6b" top={72}>原来一共有 {a} 个</Caption>
      ) : null}
      {Array.from({ length: a }).map((_, j) => {
        if (j < b) {
          const t0 = C1 + j * 36;
          return (
            <div key={j} style={modeStyle(j, t0)}>
              <EmojiChip x={0} y={0} emoji={emoji} size={52} />
            </div>
          );
        }
        return (
          <Pop key={j} at={C0 + j * 14}>
            <EmojiChip x={x0 + j * itemW} y={y} emoji={emoji} size={52} />
          </Pop>
        );
      })}
      {/* 减少中的数量牌：只显示当前最新的一枚，避免多枚叠在一起 */}
      {frame >= C1 - 4 ? (() => {
        const vanished = Math.max(0, Math.min(b, Math.floor((frame - (C1 + 22)) / 36) + 1));
        const val = a - vanished;
        return (
          <div style={{
            position: 'absolute', left: 28, top: 290, background: 'rgba(255,255,255,.9)', border: '3px solid #f0d9b0',
            borderRadius: 16, padding: '5px 14px', fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ORANGE,
          }}>还剩 {val} 个</div>
        );
      })() : null}
      {frame > C2 ? (
        <AbsoluteFill>
          <StarBurst at={C2} />
          <Pill at={C2} y={282}>{a} － {b} ＝ {a - b}</Pill>
          <Caption at={C2 + 14} size={26} color={GREEN} top={72}>
            东西变少了——这就是减法！还剩 {a - b} 个
          </Caption>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 3. 分成 ---------- */
export function SplitAnim(props) {
  const { t, p, emoji } = props;
  const frame = useCurrentFrame();
  const itemW = Math.min(58, 520 / t);
  const x0 = (720 - t * itemW) / 2, y = 118;
  const S0 = 30 + t * 14 + 24;
  const boxL = { x: 80, y: 210, w: 230, h: 130 };
  const boxR = { x: 410, y: 210, w: 230, h: 130 };
  return (
    <AbsoluteFill>
      <Bg emo={['🍬', '🧸']} />
      <Caption at={8} size={36} top={12}>✂️ 分一分：把 {t} 个分成两份</Caption>
      {frame < S0 ? (
        Array.from({ length: t }).map((_, i) => (
          <Pop key={i} at={20 + i * 14}><EmojiChip x={x0 + i * itemW} y={y} emoji={emoji} /></Pop>
        ))
      ) : null}
      {/* 两个盘子 */}
      {[boxL, boxR].map((bx, k) => (
        <Pop key={'bx' + k} at={S0 - 16}>
          <div style={{
            position: 'absolute', left: bx.x, top: bx.y, width: bx.w, height: bx.h,
            background: '#fff', border: '4px dashed #f0b9c8', borderRadius: 22,
          }}>
            <div style={{ position: 'absolute', top: -32, width: '100%', textAlign: 'center', fontFamily: FONT, fontSize: 24, fontWeight: 900, color: PINK }}>
              {k === 0 ? `这份 ${p} 个` : `这份 ${t - p} 个`}
            </div>
          </div>
        </Pop>
      ))}
      {/* 分配动画 */}
      {Array.from({ length: t }).map((_, i) => {
        const k = i < p ? 0 : 1;
        const src = { x: x0 + i * itemW, y };
        const dst = k === 0
          ? { x: boxL.x + 26 + (i % 4) * 48, y: boxL.y + 18 + Math.floor(i / 4) * 52 }
          : { x: boxR.x + 26 + ((i - p) % 4) * 48, y: boxR.y + 18 + Math.floor((i - p) / 4) * 52 };
        const pr = interpolate(frame, [S0 + i * 10, S0 + i * 10 + 24], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic) });
        const dx = (dst.x - src.x) * pr, dy = (dst.y - src.y) * pr;
        const s = 1 - 0.25 * Math.sin(pr * Math.PI);
        return (
          <div key={i} style={{ position: 'absolute', left: src.x, top: src.y, transform: `translate(${dx}px,${dy}px) scale(${s})`, opacity: 1 }}>
            <EmojiChip x={0} y={0} emoji={emoji} size={44} />
          </div>
        );
      })}
      {frame > S0 + t * 10 + 30 ? (
        <AbsoluteFill>
          <StarBurst at={S0 + t * 10 + 34} />
          <Caption at={S0 + t * 10 + 34} size={30} color={GREEN} top={94}>
            {t} 可以分成 {p} 和 {t - p}！
          </Caption>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 4. 数一数 ---------- */
export function CountAnim(props) {
  const { n, emoji } = props;
  const frame = useCurrentFrame();
  const itemW = 92, perRow = 5;
  const y0 = 118;
  const R0 = 20 + n * 13 + 14;
  const pos = (i) => {
    const r = Math.floor(i / perRow), c = i % perRow;
    const rowN = Math.min(perRow, n - r * perRow);
    return { x: (720 - rowN * itemW) / 2 + c * itemW, y: y0 + r * 104 };
  };
  return (
    <AbsoluteFill>
      <Bg emo={['🔍', '⭐']} />
      <Caption at={8} size={36} top={12}>🔢 我们数一数：点一下，数一个！</Caption>
      {Array.from({ length: n }).map((_, i) => {
        const { x, y } = pos(i);
        const t0 = R0 + i * 26;
        return (
          <div key={i} style={{ position: 'absolute' }}>
            <Pop at={16 + i * 13}><EmojiChip x={x} y={y} emoji={emoji} size={52} /></Pop>
            {frame > t0 - 8 ? (
              <Pop at={t0}>
                <div style={{
                  position: 'absolute', left: x - 6, top: y - 6, width: 76, height: 76,
                  border: `5px solid ${ORANGE}`, borderRadius: '50%',
                }} />
              </Pop>
            ) : null}
          </div>
        );
      })}
      {/* 大数字计数器 */}
      {Array.from({ length: n + 1 }).map((_, v) => {
        const at = v === 0 ? 10 : R0 + (v - 1) * 26;
        return (
          <Pop key={'v' + v} at={at}>
            <div style={{
              position: 'absolute', right: 26, top: 60, minWidth: 76, textAlign: 'center',
              background: '#fff', border: '4px solid #f0d9b0', borderRadius: 18, padding: '2px 10px',
              fontFamily: FONT, fontSize: 46, fontWeight: 900, color: v === n ? '#ef4444' : ORANGE,
            }}>{v}</div>
          </Pop>
        );
      })}
      {frame > R0 + (n - 1) * 26 + 30 ? (
        <AbsoluteFill>
          <StarBurst at={R0 + (n - 1) * 26 + 34} />
          <Caption at={R0 + (n - 1) * 26 + 40} size={28} color={GREEN} top={72}>
            数完啦！一共 {n} 个！不重不漏～
          </Caption>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 5. 比多少 / 比大小 ---------- */
export function CompareAnim(props) {
  const { aN, bN, aE, bE, rel } = props;
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sym = { '>': '＞', '<': '＜', '=': '＝' }[rel];
  const leftBig = rel === '>', rightBig = rel === '<', same = rel === '=';
  const Card = ({ x, e, n, at, hl }) => {
    return (
      <Pop at={at}>
        <div style={{
          position: 'absolute', left: x, top: 88, width: 240, height: 206,
          background: '#fff', borderRadius: 24,
          border: `6px solid ${hl ? ORANGE : '#eadfca'}`, boxShadow: '0 8px 22px rgba(0,0,0,.10)',
        }}>
          {e ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', height: 136, gap: 4, padding: 10, fontSize: 42 }}>
              {Array.from({ length: n }).map((_, i) => <span key={i} style={{ lineHeight: 1.1 }}>{e}</span>)}
            </div>
          ) : (
            <div style={{ height: 136, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 88, fontWeight: 900, color: '#3b82f6' }}>{n}</div>
          )}
          <div style={{ textAlign: 'center', fontFamily: FONT, fontSize: 24, fontWeight: 900, color: '#8a6d4b' }}>
            {e ? `${n} 个` : `数字 ${n}`}
          </div>
        </div>
      </Pop>
    );
  };
  let cap = '';
  if (same) cap = aE ? `两边都是 ${aN} 个，一样多！` : `两个数一样大，用等号！`;
  else if (aE) cap = `左边 ${aN} 个，右边 ${bN} 个——${leftBig ? '左边' : '右边'}更多！`;
  else cap = `${aN} 和 ${bN} 比，${leftBig ? aN + ' 大' : bN + ' 大'}！大嘴巴朝着大数`;
  return (
    <AbsoluteFill>
      <Bg emo={['⚖️', '🐊']} />
      <Caption at={8} size={36} top={10}>🐊 比一比！大嘴巴要「吃掉」更多的那边</Caption>
      <Card x={56} e={aE} n={aN} at={16} hl={leftBig} />
      <Card x={424} e={bE} n={bN} at={26} hl={rightBig} />
      <Pop at={70}>
        {(() => {
          const p = spring({ frame: frame - 70, fps, config: { damping: 8, stiffness: 100 } });
          return (
            <div style={{
              position: 'absolute', left: 316, top: 116, width: 88, height: 88,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg,#ffe08a,#ffb13d)', borderRadius: '50%',
              fontSize: 62, fontWeight: 900, color: '#8a5612', transform: `scale(${p}) translateY(${(1 - p) * -120}px)`,
              boxShadow: '0 8px 20px rgba(245,158,11,.4)',
            }}>{sym}</div>
          );
        })()}
      </Pop>
      <Caption at={110} size={26} top={306}>{cap}</Caption>
      {frame > 130 ? <StarBurst at={132} count={6} /> : null}
    </AbsoluteFill>
  );
}

/* ---------- 6. 第几个（序数） ---------- */
export function OrdinalAnim(props) {
  const { items, pos } = props;
  const frame = useCurrentFrame();
  const itemW = Math.min(78, 640 / items.length);
  const x0 = (720 - items.length * itemW) / 2, y = 170;
  const H0 = 70, step = 34;
  const finalF = H0 + (pos - 1) * step;
  return (
    <AbsoluteFill>
      <Bg emo={['🚉', '🐣']} />
      <Caption at={8} size={36} top={12}>🚩 排队啦！从左往右，一个一个数</Caption>
      {items.map((e, i) => (
        <Pop key={i} at={24 + i * 16}><EmojiChip x={x0 + i * itemW} y={y} emoji={e} size={52} /></Pop>
      ))}
      {Array.from({ length: pos }).map((_, i) => {
        const at = H0 + i * step;
        return (
          <Pop key={'f' + i} at={at}>
            <div style={{
              position: 'absolute', left: x0 + i * itemW + itemW / 2 - 22, top: y - 78, fontSize: 34,
              transform: 'translateY(-6px)',
            }}>🚩</div>
          </Pop>
        );
      })}
      <Caption at={H0 - 6} size={24} color="#a58c6b" top={132}>数到一个，标一个……</Caption>
      {frame > finalF + 24 ? (
        <AbsoluteFill>
          <StarBurst at={finalF + 26} />
          <Pill at={finalF + 26} color="#ffe9b0" y={268}>🎯 它排在「第 {pos} 个」！</Pill>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 7. 相邻数 ---------- */
export function NeighborAnim(props) {
  const { n } = props;
  const frame = useCurrentFrame();
  const w = 620 / 9;
  const x0 = 50, y = 186;
  return (
    <AbsoluteFill>
      <Bg emo={['🏘️']} />
      <Caption at={8} size={36} top={12}>🏘️ 数字宝宝排队：1、2、3、4、5……</Caption>
      {Array.from({ length: 10 }).map((_, i) => {
        const v = i + 1;
        const isSelf = v === n;
        const isNb = v === n - 1 || v === n + 1;
        const at = 14 + i * 8;
        return (
          <Pop key={v} at={at}>
            <div style={{
              position: 'absolute', left: x0 + i * w - 24, top: y,
              width: 48, height: 48, borderRadius: '50%',
              background: isSelf ? ORANGE : isNb ? BLUE : '#fff',
              color: isSelf || isNb ? '#fff' : '#8a6d4b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT, fontSize: 26, fontWeight: 900,
              border: '3px solid #eadfca', transform: `scale(${isSelf ? 1.35 : isNb ? 1.2 : 1})`,
              boxShadow: isNb ? '0 0 0 6px rgba(59,130,246,.25)' : 'none',
            }}>{v}</div>
          </Pop>
        );
      })}
      <Caption at={110} size={26} top={244} color={GREEN}>看！{n} 前面挨着 {n - 1}，后面挨着 {n + 1}</Caption>
      <Caption at={128} size={28} top={286}>它们就是 {n} 的「好邻居」！</Caption>
      {frame > 140 ? <StarBurst at={142} count={6} /> : null}
    </AbsoluteFill>
  );
}

/* ---------- 8. 单数双数 ---------- */
export function OddEvenAnim(props) {
  const { n, emoji } = props;
  const frame = useCurrentFrame();
  const odd = n % 2 === 1;
  const pairs = Math.floor(n / 2);
  const itemW = Math.min(70, 640 / Math.max(n, 4));
  const x0 = (720 - n * itemW) / 2, y = 148;
  const P0 = 24 + n * 16 + 26;
  return (
    <AbsoluteFill>
      <Bg emo={['👬', '🧦']} />
      <Caption at={8} size={36} top={12}>👫 两个两个手拉手，看看会不会「落单」？</Caption>
      {Array.from({ length: n }).map((_, i) => (
        <Pop key={i} at={16 + i * 16}><EmojiChip x={x0 + i * itemW} y={y} emoji={emoji} size={48} /></Pop>
      ))}
      {Array.from({ length: pairs }).map((_, k) => {
        const at = P0 + k * 30;
        return (
          <Pop key={'p' + k} at={at}>
            <div style={{
              position: 'absolute', left: x0 + k * 2 * itemW + 8, top: y - 14,
              width: itemW * 2 - 16, height: 108, border: '5px solid ' + GREEN, borderRadius: 22,
            }}>
              <div style={{ position: 'absolute', right: -32, top: 74, background: GREEN, color: '#fff', borderRadius: 999, padding: '2px 9px', fontFamily: FONT, fontSize: 17, fontWeight: 900 }}>
                第{k + 1}双
              </div>
            </div>
          </Pop>
        );
      })}
      {frame > P0 + pairs * 30 + 26 ? (
        <AbsoluteFill>
          {odd ? (
            <div>
              <Caption at={P0 + pairs * 30 + 28} size={26} top={252}>哎呀，最后还剩 1 个孤零零的——</Caption>
              <Caption at={P0 + pairs * 30 + 46} size={38} color={PINK} top={290}>所以 {n} 是「单数」！</Caption>
            </div>
          ) : (
            <Caption at={P0 + pairs * 30 + 28} size={38} color={GREEN} top={266}>全部手拉手啦！{n} 是「双数」！</Caption>
          )}
          <StarBurst at={P0 + pairs * 30 + 44} />
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
}

/* ---------- 9. 单数串演示（1 3 5 7 9） ---------- */
export function OddLineAnim() {
  const frame = useCurrentFrame();
  const w = 620 / 9;
  const x0 = 50, y = 168;
  return (
    <AbsoluteFill>
      <Bg emo={['🔢']} />
      <Caption at={8} size={36} top={12}>🔢 数字排排队：谁是单数？</Caption>
      {Array.from({ length: 10 }).map((_, i) => {
        const v = i + 1;
        const isOdd = v % 2 === 1;
        const pulse = 1 + 0.12 * Math.sin((frame / 30) * Math.PI * 2 * 2 + i);
        return (
          <Pop key={v} at={14 + i * 8}>
            <div style={{
              position: 'absolute', left: x0 + i * w - 24, top: y,
              width: 48, height: 48, borderRadius: '50%',
              background: isOdd ? ORANGE : '#efeee9',
              color: isOdd ? '#fff' : '#b8ac97',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: FONT, fontSize: 26, fontWeight: 900,
              transform: `scale(${isOdd ? pulse : 1})`,
            }}>{v}</div>
          </Pop>
        );
      })}
      <Caption at={110} size={26} color={ORANGE} top={232}>1、3、5、7、9 是单数——都会多一个！</Caption>
      <Caption at={128} size={24} top={284}>2、4、6、8、10 是双数，都能成双成对。</Caption>
      {frame > 140 ? <StarBurst at={142} count={6} /> : null}
    </AbsoluteFill>
  );
}

export const ALL = { add: AddAnim, sub: SubAnim, split: SplitAnim, count: CountAnim, compare: CompareAnim, ordinal: OrdinalAnim, neighbor: NeighborAnim, oddEven: OddEvenAnim, oddLine: OddLineAnim };
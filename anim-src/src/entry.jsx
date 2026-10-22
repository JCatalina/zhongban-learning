/* 入口：把 Remotion 播放器暴露给主页面
   用法：window.ZZBAnim.play(props, containerEl) / window.ZZBAnim.stop() */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { ALL } from './comps';

let root = null;

function play(props, container) {
  stop();
  const Comp = ALL[props && props.type];
  if (!Comp || !container) return false;
  root = createRoot(container);
  root.render(
    React.createElement(Player, {
      component: Comp,
      inputProps: props,
      durationInFrames: props.duration || 300,
      fps: 30,
      compositionWidth: 720,
      compositionHeight: 405,
      controls: true,
      autoPlay: true,
      loop: false,
      acknowledgeRemotionLicense: true,
      style: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        background: '#fff',
      },
    })
  );
  return true;
}

function stop() {
  if (root) {
    try { root.unmount(); } catch (e) { /* noop */ }
    root = null;
  }
}

window.ZZBAnim = { play, stop };
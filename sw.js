const CACHE_NAME = 'zzb-v1.4.0';

// 核心预缓存文件清单
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './data_calc.js',
  './data_eng.js',
  './data_logic.js',
  './data_math.js',
  './data_read.js',
  './data_safe.js',
  './data_science.js',
  './data_shape.js',
  './data_song.js',
  './anim/anim-player.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      // 容错式预缓存，避免个别文件变动导致整个 SW 安装失败
      for (const url of PRECACHE_URLS) {
        try {
          await cache.add(url);
        } catch (e) {
          console.warn('预缓存文件跳过或失败:', url, e);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. 对于包含 Range 请求头的多媒体资源（如微信/iOS 播放 audio），直接由浏览器/网络原生处理
  if (event.request.headers.get('range')) {
    return;
  }

  // 2. 针对同源静态资源采用缓存优先策略
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
  }
});

const CACHE_STATIC = 'lumiere-static-v3';
const CACHE_FONTS  = 'lumiere-fonts-v1';
const BASE         = '/lumiere/';

const STATIC_ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'lessons.js',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
];

// ── INSTALL: precachea todo lo estático ──────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: limpia cachés viejas ───────────────────────
self.addEventListener('activate', e => {
  const KEEP = [CACHE_STATIC, CACHE_FONTS];
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !KEEP.includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ────────────────────────────────────────────────
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // 1. Google Fonts CSS → network-first, cachea en CACHE_FONTS
  if (url.includes('fonts.googleapis.com')) {
    e.respondWith(
      caches.open(CACHE_FONTS).then(cache =>
        fetch(e.request)
          .then(res => { cache.put(e.request, res.clone()); return res; })
          .catch(() => cache.match(e.request))
      )
    );
    return;
  }

  // 2. Google Fonts archivos de fuente (.woff2) → cache-first
  if (url.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE_FONTS).then(cache =>
        cache.match(e.request).then(r => r ||
          fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; })
        )
      )
    );
    return;
  }

  // 3. Todo lo demás → cache-first, fallback a red, fallback a index.html
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request)
        .then(res => {
          // Solo cachea respuestas válidas del mismo origen
          if (res.ok && e.request.method === 'GET') {
            caches.open(CACHE_STATIC).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => {
          // Sin red y sin caché → devuelve index.html para navegación
          if (e.request.mode === 'navigate') {
            return caches.match(BASE + 'index.html');
          }
        });
    })
  );
});

// ── NOTIFICACIONES ───────────────────────────────────────
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(BASE));
});

self.addEventListener('push', e => {
  const data = e.data
    ? e.data.json()
    : { title: 'Lumière · نور', body: 'Tu momento de idiomas te espera' };
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body:    data.body,
      icon:    BASE + 'icons/icon-192.png',
      badge:   BASE + 'icons/icon-192.png',
      vibrate: [200, 100, 200],
    })
  );
});

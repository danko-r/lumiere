const CACHE = 'lumiere-v2';
const BASE = '/lumiere/';
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'lessons.js',
  BASE + 'manifest.json',
  BASE + 'icons/icon-192.png',
  BASE + 'icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    })).catch(() => caches.match(BASE + 'index.html'))
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(BASE));
});

self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : { title: 'Lumière', body: 'Tu momento de idiomas te espera' };
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body, icon: BASE + 'icons/icon-192.png', badge: BASE + 'icons/icon-192.png', vibrate: [200, 100, 200]
  }));
});

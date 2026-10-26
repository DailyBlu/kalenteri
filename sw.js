// Bump VERSION whenever you deploy changes so phones pick up the new files.
const VERSION = 'kalenteri-v0.15';
const FILES = ['./', './index.html', './manifest.json', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Only the app's own files and the Firebase library are cached.
// Firebase's live connections (login, database) always go straight to the network.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const own = url.origin === self.location.origin;
  const lib = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  if (!own && !lib) return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || (own ? caches.match('./index.html') : undefined)))
  );
});

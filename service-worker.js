const CACHE_NAME = 'audio-reader-cache-v1';
const urlsToCache = [
  '/audio-reader/',
  '/audio-reader/index.html',
  '/audio-reader/manifest.json',
  '/audio-reader/icon-192.png',
  '/audio-reader/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
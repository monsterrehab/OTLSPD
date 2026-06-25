const CACHE_NAME = 'otpd-btk-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Special+Elite&display=swap',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_police_badge.svg',
  'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
];

// Telepítés és fájlok gyorsítótárazása
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Offline működés biztosítása (Cache-first stratégia)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

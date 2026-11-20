// Service Worker: legt alle Dateien beim ersten Besuch ab, danach geht alles offline.
var NAME = 'schulbuch-v14';
var DATEIEN = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'daten/inhaltsverzeichnis.js',
  'daten/helfer.js',
  'daten/zeichnungen.js',
  'daten/zeichnungen-bio-a.js',
  'daten/zeichnungen-bio-b.js',
  'daten/zeichnungen-che.js',
  'daten/zeichnungen-phy.js',
  'daten/kapitel-bio5.js',
  'daten/kapitel-phy5.js',
  'daten/kapitel-che5.js',
  'daten/kapitel-erd5.js',
  'daten/kapitel-bio6.js',
  'daten/kapitel-phy6.js',
  'daten/kapitel-che6.js',
  'daten/kapitel-erd6.js',
  'daten/kapitel-bio7.js',
  'daten/kapitel-phy7.js',
  'daten/kapitel-che7.js',
  'daten/kapitel-erd7.js',
  'daten/kapitel-bio8.js',
  'daten/kapitel-phy8.js',
  'daten/kapitel-che8.js',
  'daten/kapitel-erd8.js',
  'daten/kapitel-bio9.js',
  'daten/kapitel-phy9.js',
  'daten/kapitel-che9.js',
  'daten/kapitel-erd9.js',
  'daten/kapitel-bio10.js',
  'daten/kapitel-phy10.js',
  'daten/kapitel-che10.js',
  'daten/kapitel-erd10.js',
  'daten/kapitel-bio11.js',
  'daten/kapitel-phy11.js',
  'daten/kapitel-che11.js',
  'daten/kapitel-erd11.js',
  'daten/kapitel-bio12.js',
  'daten/kapitel-phy12.js',
  'daten/kapitel-che12.js',
  'daten/kapitel-erd12.js',
  'daten/kapitel-bio13.js',
  'daten/kapitel-phy13.js',
  'daten/kapitel-che13.js',
  'daten/kapitel-erd13.js',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(NAME).then(function (c) { return c.addAll(DATEIEN); }));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n !== NAME; }).map(function (n) { return caches.delete(n); }));
  }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  e.respondWith(caches.match(e.request).then(function (r) {
    return r || fetch(e.request).then(function (res) {
      var kopie = res.clone();
      caches.open(NAME).then(function (c) { c.put(e.request, kopie); });
      return res;
    });
  }));
});

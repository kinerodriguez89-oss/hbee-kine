// HBEE Kine — Service Worker (v1)
// Deliberadamente mínimo: SIEMPRE va a la red, no cachea nada.
// En una app clínica compartida, mostrar datos viejos sin conexión
// es peligroso — preferimos que sin internet la app no cargue.

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Passthrough: todo va directo a la red
  e.respondWith(fetch(e.request));
});

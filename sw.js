const CACHE_NAME = "bikepack-route-pwa-v28";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.webmanifest",
  "/app-icon.svg",
  "/home-bike-photo.jpeg",
  "/home-bike-photo-2.jpg",
  "/home-bike-photo-3.jpg",
  "/TourDivide2025_v2.gpx",
  "/Bikepacking-Route-GDMBR_V_TD_2017.gpx",
  "/Bikepacking-Route-Colorado-Trail_v2017_08.gpx",
  "/AZT300_2026_v4.gpx",
  "/AZT800_2026_v1.gpx",
  "/Peru_Great_Divide_Full_(Huaraz_to_Abancay)_22_07_2022.gpx"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === "opaque") return response;
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("/index.html"));
    })
  );
});

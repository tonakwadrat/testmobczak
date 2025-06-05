const CACHE_NAME = "mObywatel-cache-v1";

self.addEventListener("install", (event) => {
    console.log("Service Worker zainstalowany");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                "/",
                "/logowanie.html",
                "/assets/Heebo-Medium.ttf",
                "/assets/Heebo-Regular.ttf",
                "/assets/Roboto-Black.ttf",
                "/assets/Roboto-Bold.ttf",
                "/stronaglowna.html",
                "/manifest.json",
                "/images/icon-192.png",
                "/images/icon-512.png",
                "/logowanie2.html",
                "/logowanie.png",
                "/logowanie2.png",
                "/mDowód.html",
                "/jakoscpowietrza.html",
                "/recepty.html",
                "/bezpiecznasiec.html",
                "/powodz.html",
                "/zlozwniosek.html",
                "/firma.html"
            ]);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log("Usuwam stary cache:", cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
const CACHE = "nmw-v3";          // Verhoog bij elke wijziging van bestanden
const PREFIX = "nmw-";           // Alleen caches met dit voorvoegsel worden beheerd
const BESTANDEN = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./videos.js",
    "./nac-logo.png",
    "./Powered by DS2P zonder achtergrond.png",
    "./icon-192-optimized.png",
    "./icon-512.png"              // Pas de naam aan naar je echte 512-bestand
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((c) => c.addAll(BESTANDEN))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((namen) =>
                Promise.all(
                    namen
                        .filter((n) => n.startsWith(PREFIX) && n !== CACHE)
                        .map((n) => caches.delete(n))
                )
            )
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const verzoek = event.request;
    if (verzoek.method !== "GET") return;

    const eigenDomein = new URL(verzoek.url).origin === self.location.origin;

    event.respondWith(
        fetch(verzoek)
            .then((antwoord) => {
                // Sla eigen, geslaagde bestanden op voor offline gebruik
                if (eigenDomein && antwoord.ok) {
                    const kopie = antwoord.clone();
                    caches.open(CACHE).then((c) => c.put(verzoek, kopie));
                }
                return antwoord;
            })
            .catch(() =>
                caches.match(verzoek).then((gevonden) =>
                    gevonden || (verzoek.mode === "navigate" ? caches.match("./index.html") : undefined)
                )
            )
    );
});

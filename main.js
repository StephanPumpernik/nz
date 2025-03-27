/*
skript für nz reise
*/


let stop = {
    nr: 7,
    titel: "Moeraki Boulders",
    user: "StephanPumpernik",
    lat: -45.345275,
    lng: 170.826061,
    zoom: 13,
};


// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);

//popup definieren und öffnen
marker.bindPopup(`
           <h2> Moreaki Boulders </h2>
           <ul>
            <li> Geogr. Breite: ${stop.lat.toFixed(5)}° </>
            <li> Geogr. Länge: ${stop.lng.toFixed(5)}° </>
           </ul>
            `).openPopup();


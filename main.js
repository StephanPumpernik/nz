/*
skript für nz reise
*/

let lat = -45.345275;
let lng = 170.826061;
let zoom = 13;

let stop = {
    nr: 7,
    titel: "Moeraki Boulders",
    user: "StephanPumpernik",
    lat: lat,
    lng: lng,
    zoom: zoom,
};


// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

//popup definieren und öffnen
marker.bindPopup(`
           <h2> Moreaki Boulders </h2>
           <ul>
            <li> Geogr. Breite: ${lat.toFixed(5)}° </>
            <li> Geogr. Länge: ${lng.toFixed(5)}° </>
           </ul>
            `).openPopup();


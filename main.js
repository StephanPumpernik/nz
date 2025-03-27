/*
skript für nz reise
*/

let lat = -45.345275;
let lng = 170.826061;
let zoom = 13;

// Karte initialisieren
let map = L.map('map').setView([lat, lng],zoom );
//Hintergrund definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        //marker zeichnen
        let marker = L.marker([lat, lng]).addTo(map);
        //popup definieren und öffnen
        marker.bindPopup(`
            <b>Moeraki Boulders</b>
            <br>
            I am a popup at ${lat.toFixed(5)} / ${lng.toFixed(5)}.
            `).openPopup();
/*
skript für nz reise

*/

// Karte initialisieren
let map = L.map('map').setView([-45.345275, 170.826061], 13);
//Hintergrund definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        //marker zeichnen
        let marker = L.marker([-45.345275, 170.826061]).addTo(map);
        //popup definieren und öffnen
        marker.bindPopup("<b>Moeraki Boulders</b><br>I am a popup.").openPopup();
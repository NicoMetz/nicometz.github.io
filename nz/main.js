

const div = document.getElementById("map");
const breite = div.getAttribute("data-lat");
const laenge = div.getAttribute("data-lng");
const titel = div.getAttribute("data-title");

console.log("breite:",breite,"länge:",laenge,"Titel:",titel);
let karte = L.map("map");


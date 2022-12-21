//Liste med adjektiv
var adjective = ["Aktuelle", "Alvorlige", "Ansvarlige", "Berømte", "Dumme", "Dype", 
"Hjelpsomme", "Hemmelige","Gravide", "Fjerne", "Ferske", "Falske", "Enkle","Eksisterende", "Ekle", 
"Hyppige", "Heldige", "Fremmede", "Lyse", "Hyppige","Åpenbare", "Åpne", 
"Rare", "Ullykelige", "Tunge", "Tynne", "Morsomme", "Opprinnelige", "Ordentlige", 
"Runde", "Smale", "Skyldige", "Sultne", "Stramme", "Stolte", "Vennlige", 
"Naturlige", "Kule", "Rene", "Skarpe", "Bråkete", "Synlige", "Stille", "Sunne", "Strenge", "Tilgjengelige", "Uavhengige", ] 

//liste med substantiv
var object = ["Taco", "Cola", "Solbrille", "Vannmelon", "Baconburger", "Eplepai", "Edderkopp",
"Drage", "Sjokolade", "Brus", "Klokke", "Iphone", "100kr seddel", "Kosedyr",
"Freia", "Sokker", "Genser", "Veske", "Basseng", "Hatt", "Kamera", "Vannflaske", "Bilde",
"Hunde bein", "Hår børste", "Bursdags kort"]
var list;

//Skriver ut navnet ditt (adjektiv + substantiv)
function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}

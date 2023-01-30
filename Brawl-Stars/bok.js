// Henter HTML-elementer
let listeEl = document.querySelector("ul");
let inputEl = document.querySelector("input");
let knappEl = document.querySelector("button");

// Legger til lytter på knappen
knappEl.addEventListener("click", leggTilBok);

// Lager en array for å holde orden på bøkene
let bøker = [];

// Viser liste over bøkene
lagListe();

// Funksjon for å skrive ut bøker
function lagListe() {
  // Sjekker om det er lagret bøker tidligere
  if (localStorage.bokliste) {
    // Det finnes lagrede bøker, vi henter dem
    let tekst = localStorage.bokliste;

    // Deler opp teksten i en array
    bøker = tekst.split(":");
  }

  // Tømmer listeelementet
  listeEl.innerHTML = "";

  for (let i = 0; i < bøker.length; i++) {
    // Lager et <li>-element
    let liEl = document.createElement("li");

    // Legger til en bok i <li>-elementet
    liEl.innerHTML = bøker[i];

    // Legger til <li>-elementet i lista
    listeEl.appendChild(liEl);    
  }
}

// Funksjon for å legge til bøker
function leggTilBok() {
  // Henter tittelen til ny bok
  let nyBok = inputEl.value;

  // Legger til boka i arrayen
  bøker.push(nyBok);

  // Oppdaterer localStorage
  let tekst = "";

  for (let i = 0; i < bøker.length; i++) {
    if (i == 0) {
      tekst += bøker[i];
    } else {
      tekst += ":" + bøker[i];
    }
  }

  localStorage.bokliste = tekst;

  // Viser listen på nytt
  lagListe();
}



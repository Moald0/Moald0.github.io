//Et objekt med ulike verdier
let meg = {           
    fornavn: "Simon",
    etternavn: "Thuv",
    fodselsaar: "2004",
    favorittfilm: "Prinsesse Mononoke",
    favoritttall: "36",
    favorittmat: ["Pizza", "Pasta", "Sushi"], //Array inn i et objekt
    fulltNavn: function() { //En funksjon som skriver ut fornavnet + etternavnet
        return this.fornavn + " " + this.etternavn;
      },
    visMat: function() { //En funksjon som skriver ut favorittmaten
        return this.favorittmat;
    }        
};

console.log(meg.visMat()); //Skriver ut favorittmaten

meg.favorittfarge = "Gron"; //Legger til favorittfarge

console.log(meg.fulltNavn()); //Skriver ut fulle navnet

console.log(meg) //Skriver ut objektet

//for (let egenskap in meg){
    //console.log(meg[egenskap])
//} Finne egenskapene i objektet


function random_item(favmat) //random mat generator, først en funksjon
{
  
return favmat[Math.floor(Math.random()*favmat.length)]; //returner også er det noe med math greier ganger legnden
     
}

var favmat = ["Pizza", "Pasta", "Sushi"]; //Lista med maten 
console.log(random_item(favmat)); //Skriver ut i konsollen



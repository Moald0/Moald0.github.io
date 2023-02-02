//De ulike funksjonene
var blokk = document.getElementById("blokk");
var hull = document.getElementById("hull");
var karakter = document.getElementById("karakter");
var hoppe = 0;
var counter = 0;


//Funksjonen lager hull i blokkene på tilfeldige steder
hull.addEventListener('animationiteration', () => { //Funksjonen kjører når animasjonen kjører
    var random = -((Math.random()*300)+150);        
    hull.style.top = random + "px";
    counter++; //En counter
});
//Tyngekraft, får karakteren til å gå nedover
setInterval(function(){
    var karakterTop = 
    parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    if(hoppe==0){
        karakter.style.top = (karakterTop+3)+"px"
    }
    var blokkleft = parseInt(window.getComputedStyle(blokk).getPropertyValue("left"));
    var hullTop = parseInt(window.getComputedStyle(hull).getPropertyValue("top"));
    var karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    var cTop = -(500-karakterTop);
    //Detektor til når spillet er over
    if((karakterTop>480)||((blokkleft<20)&&(blokkleft>-50)&&((cTop<hullTop)||(cTop>hullTop+130)))){
        alert("Spillet er over! Scoren din ble: "+counter);
        karakter.style.top = 100 + "px";
        counter=0; //Restarter scoren til 0, sånn at den ikke blir evig
    }    
},10);
//En hoppe funksjon, får karakteren til å "hoppe"
function hopp(){
    hoppe = 1
    let hoppCount = 0;
    var hoppInterval = setInterval(function(){
        var karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
        if((karakterTop>6)&&(counter<15)){
            karakter.style.top = (karakterTop-5)+"px"
        }
        if(hoppCount>20){
            clearInterval(hoppInterval);
            hoppe=0;
            hoppCount=0;
        }
        hoppCount++;
    },10);
}

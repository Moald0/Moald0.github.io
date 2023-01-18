let tall = [2,4,6,8];
tall.pop(); //Fjerner det siste tallet
tall.shift(); //Fjerner det første tallet
tall.splice(1,0,5) //Setter inn tallet 5
tall.push(7); //Setter inn tallet sju
tall.unshift(3); //Setter inn tallet tre
tall.indexOf(10); //Skal finne 10 tallet, ingenting skjer fordi jeg har ikke ti tall
tall.lastIndexOf(10); //Skal finne 10 tallet, ingenting skjer fordi jeg har ikke ti tall
console.log(tall);
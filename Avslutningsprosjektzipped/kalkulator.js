// Denne funksjonen fjerner verdiene
function clearScreen() {
    document.getElementById("result").value = "";
}

// Denne funksjonen viser verdiene
function display(value) {
    document.getElementById("result").value += value;
}

// Denne funksjonen evaluerer uttrykket og returner resultatet
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
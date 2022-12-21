let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let liste = []

function createChild(){
    liste.push(inputField.value);
    inputField.value = "";
    makeList()
}
function makeList() {

    toDoContainer.innerHTML = "";
    for (const iterator of liste) {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = iterator;
    
        toDoContainer.appendChild(paragraph);

        paragraph.addEventListener('click', function(event){
            event.target.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(event){
            let ind = liste.indexOf(event.target);
            liste.splice(ind, 1);
            makeList()

        })
    }
    

}


addToDoButton.addEventListener('click', createChild )

inputField.addEventListener("keypress", function(event){

    if (event.key === "Enter") {
        event.preventDefault();
        createChild()
    }
})
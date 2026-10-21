function translateToLatin() {

    let nameElement = document.getElementById("Name");
    let placeElement = document.getElementById("Place");
    let place2Element = document.getElementById("Place2");
    let sElement = document.getElementById("S");
    let famElement = document.getElementById("Fam");
    let dateElement = document.getElementById("Date");

    if (nameElement.innerText === "Минотавр") {
        nameElement.innerText = "Minotaur";
        placeElement.innerText = "Crete";
        place2Element.innerText = "Labyrinth";
        sElement.innerText = "Male";
        famElement.innerText = "not married";
        dateElement.innerText = "2000 BC";
    } else {

        nameElement.innerText = "Минотавр";
        placeElement.innerText = "Крит";
        place2Element.innerText = "Лабиринт";
        sElement.innerText = "мужской";
        famElement.innerText = "Не женат";
        dateElement.innerText = "2000 до н.э.";
    }
}


const button = document.getElementById("translate");
button.addEventListener('click', translateToLatin);
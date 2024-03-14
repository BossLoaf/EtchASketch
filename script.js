//Creates initial 16x16 Grid
function makeGrid(sideLength) {
    let screen = document.querySelector("#sketchScreen");
    screen.replaceChildren();
    let cellHeight = Math.floor(500 / sideLength) + "px";
    let cellWidth = Math.floor(500 / sideLength) + "px";
    for (let i = 0; i < sideLength; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < sideLength; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseover", colorRed);
            row.style.outline = "1px solid black";
            row.style.height = cellHeight;
            row.style.width = cellWidth;
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let currentColor = "red";

let colorRed = function colorChange(e) {
    e.target.style.backgroundColor = currentColor;
}

let colorYellow = function colorChange(e) {
    e.target.style.backgroundColor = currentColor;
}

let colorBlue = function colorChange(e) {
    e.target.style.backgroundColor = currentColor;
}

let colorRandom = function colorChange(e) {
    e.target.style.backgroundColor = currentColor;
}

let buttonRed = document.querySelector("#red")
buttonRed.onclick = function drawRed() {
    currentColor = "red";
}

let buttonYellow = document.querySelector("#yellow")
buttonYellow.onclick = function drawYellow() {
    currentColor = "yellow";
}

let buttonBlue = document.querySelector("#blue")
buttonBlue.onclick = function drawBlue() {
    currentColor = "blue";
}

let buttonRandom = document.querySelector("#random")
buttonRandom.onclick = function drawRandom() {
    let randomOne = getRandomNumber(0, 256);
    let randomTwo = getRandomNumber(0, 256);
    let randomThree = getRandomNumber(0, 256);
    currentColor = "rgb(" + randomOne + ", "  + randomTwo + ", " + randomThree + ")";
}

let button = document.querySelector("#createGrid");
button.onclick = function getUserResponse() {
    let length = prompt("Please choose grid length")
    if (length <= 100 && length > 0) {
        makeGrid(length);
    } else {
        alert("Please pick a number between 1 and 100");
    }
};

makeGrid(10);








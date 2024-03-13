function makeGrid(sideLength) {
    let screen = document.querySelector("#sketchScreen");
    screen.replaceChildren();
    let cellHeight = Math.floor(500/sideLength) + "px";
    let cellWidth = Math.floor(500/sideLength) + "px";
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

let colorRed = function colorChange(e) {
    e.target.style.backgroundColor = "red";
}

let colorYellow = function colorChange(e) {
    e.target.style.backgroundColor = "yellow";
}

let colorBlue = function colorChange(e) {
    e.target.style.backgroundColor = "blue";
}

let buttonRed = document.querySelector("#red")
buttonRed.onclick = function drawRed() {
    let row = document.querySelector("div");
    row.addEventListener("mouseover", colorRed);
}

let buttonYellow = document.querySelector("#yellow")
buttonYellow.onclick = function drawYellow() {
    let row = document.querySelector("div");
    row.addEventListener("mouseover", colorYellow);
}

let buttonBlue = document.querySelector("#blue")
buttonBlue.onclick = function drawBlue() {
    let row = document.querySelector("div");
    row.addEventListener("mouseover", colorBlue);
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








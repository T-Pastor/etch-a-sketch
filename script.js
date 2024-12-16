const container = document.getElementById("container");
const button = document.getElementById("reset");
const screenWidth = document.documentElement.clientWidth; //for proper pixel sizing

function makeGrid(rows, columns) {
    const boxSize = screenWidth / columns;
    container.style.width = screenWidth + "px";
    container.style.height = boxSize + "px";

    //creates rows
    for(let i = 0; i < rows; i++) { 
        let row = document.createElement("div");

        //creates each individual column within the rows
        for(let j = 0; j < columns; j++) {
            const pixel = document.createElement("div");
            pixel.id = "pixel";
            pixel.style.width = boxSize + "px";
            pixel.style.height = boxSize + "px";
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

makeGrid(16, 16)

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor(); //changes pixel to random color
    event.target.style.opacity = +event.target.style.opacity + 0.1; //increases pixel opacity with each mouseover
})

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

button.addEventListener("click", () => {

    let rows = getInput(0);
    let columns = getInput(1);

    if (rows > 0 && columns > 0) {
        clearGrid();
        makeGrid(rows, columns);
    }
}) 

function getInput(inputType) {
    let input = 0;
    let correctInput = false;
    
    while (!correctInput) {
        if (inputType == 0) {
            input = prompt("How many rows?");
        } else if (inputType == 1) {
            input = prompt("How many columns?");
        }
        correctInput = validateEntry(input);
    }
    return input;       
}

function validateEntry (input) {
    if (!input) { //if cancel button is pressed
        return -1;
    } else if (input > 100 || input <= 0 || isNaN(input)) { //verify input is a number between 1 and 100
        alert("Invalid entry. Please enter a number between 1 and 100.");
        return false;
    } else {
        return true;
    }
}

function randomColor() {
    let color = "#";

    //creates random hex color by calculating random digit and converting to hex
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}
const container = document.getElementById("container");


function makeGrid(rows, columns) {
    
    for(let i = 0; i < (rows * columns); i++) {
        let box = document.createElement("div");
        container.appendChild(box).className = "item";
    }
}

makeGrid(16, 16);

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "purple";
})
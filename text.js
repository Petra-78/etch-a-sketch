const mainCont = document.querySelector(".main-container");

// let gridSize = prompt("What size canvas do you want? (max. 100)");




function makeRow(num) {
    for (let i = 0 ; i < (num * num) ; i++) {
        const gridBox = document.createElement("div");
        const boxSize = 500 / num;
        gridBox.className = "grid-box";
        gridBox.style.height = boxSize + "px";
        gridBox.style.width = boxSize + "px";
        mainCont.appendChild(gridBox);
    }
}

makeRow(64);

const gridHover = document.querySelectorAll(".grid-box")
gridHover.forEach(grid => {
    grid.addEventListener ("mouseover", function() {
        grid.style.backgroundColor = "black";
    })
})

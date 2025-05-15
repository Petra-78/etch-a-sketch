const mainCont = document.querySelector(".main-container");
const gridBtn = document.querySelector(".grid-btn");
const clearBtn = document.querySelector(".clear-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const gradBtn = document.querySelector(".gradient-button");

function makeGrid(num) {
    mainCont.innerHTML = "";

    for (let i = 0 ; i < (num * num) ; i++) {
        const gridBox = document.createElement("div");
        const boxSize = 500 / num;
        gridBox.className = "grid-box";
        gridBox.style.height = boxSize + "px";
        gridBox.style.width = boxSize + "px";
        mainCont.appendChild(gridBox);
    }
}

gridBtn.addEventListener("click", () => {
    let gridSize = prompt("What size canvas do you want? (max. 100)");
    gridSize = +gridSize;
    if (gridSize <= 100) {
        makeGrid(gridSize);
    } else {
        alert("invalid input");
    }
    const gridHover = document.querySelectorAll(".grid-box");
        gridHover.forEach(grid => {
            grid.addEventListener ("mouseover", function() {
                grid.style.backgroundColor = "black";
    });
});
});



clearBtn.addEventListener("click", () => {
    const gridHover = document.querySelectorAll(".grid-box");
        gridHover.forEach(grid => {
            grid.style.backgroundColor = "rgb(214, 235, 236)";
    });
});

function randomNum() {
    let num = Math.round(Math.random() * 256);
    return num;
}

function randomColor() {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")" ;
    return rgb;
}


rainbowBtn.addEventListener("click", () => {
    const gridHover = document.querySelectorAll(".grid-box")
        gridHover.forEach(grid => {
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = randomColor();
        });
    });
});

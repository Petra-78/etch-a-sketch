const mainCont = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".grid-btn");
const clearBtn = document.querySelector(".clear-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const gradBtn = document.querySelector(".gradient-btn");
const blackBtn = document.querySelector(".black-btn");

let mouseDown = false

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

document.body.addEventListener("dragstart", e => e.preventDefault());

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

makeGrid(50);

const gridHover = document.querySelectorAll(".grid-box");
    gridHover.forEach(grid => {
    grid.addEventListener ("mouseover", function() {
        if (mouseDown) {
        grid.style.backgroundColor = "black";
        }
});
});



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
                if (mouseDown) {
                grid.style.backgroundColor = "black";
                }
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
                if (mouseDown) {
                grid.style.backgroundColor = randomColor();
                grid.style.opacity = 1;
                }
        });
    });
});



blackBtn.addEventListener("click", () => {
    const gridHover = document.querySelectorAll(".grid-box")
        gridHover.forEach(grid => {
            grid.addEventListener("mouseover", () => {
                if (mouseDown) {
                grid.style.backgroundColor = "black";
                grid.style.opacity = 1;
                }
        });
    });
});





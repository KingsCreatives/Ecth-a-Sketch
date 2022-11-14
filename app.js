//Getting elements on page
const clearBtn = document.querySelector('.clear-btn');
const gridWrapper = document.querySelector(".grid-wrapper");
let userInput = document.querySelector(".grid-num");
let createGridBtn = document.querySelector(".create-grid");
let copyUserInput = document.querySelector(".copy-num");
let prompt = document.querySelector(".prompt");


// Eventlistener for btns
userInput.addEventListener("focus", getGridNumber);
userInput.addEventListener("keyup", copyGridNumber)
clearBtn.addEventListener('click', clearGrid);
//createGridBtn.addEventListener("click", makeGrid);


// Clear grid 
function clearGrid() {
    window.location.reload();
}


// Duplicate grid number
function copyGridNumber() {
    let newGrid = userInput.Value;
    copyGridNumber.textContent = "X" + newGrid;
}

// User Grid
function getGridNumber() {
    prompt.textContent = "Enter a number between 2 and 30.";
}




// Create 12 x 12 grid by default
function createGrid(num) {
    for (var rows = 0; rows < num; rows++) {
        for (var columns = 0; columns < num; columns++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            gridWrapper.append(grid);

            grid.style.width = parseInt(480) / num + 'px';
            grid.style.height = parseInt(480) / num + 'px';
        };
        //var grids = gridWrapper.querySelectorAll(".grid");
        // grids.forEach(grid => grid.addEventListener("mouseover", changeColor));

    }
}

// Change grid based on user selection
const slider = document.querySelector(".slider");

console.log(slider.value);

function newGrid() {
    let newGrid = document.querySelectorAll(".grid");
    newGrid.forEach(grid => grid.remove());
    createGrid(slider.value);
}

slider.addEventListener("mouseup", newGrid);


// change grid color
function colorGrid() {
    switch (color) {
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'eraser':
            this.style.backgroundColor = '#ffffff';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

// Create 10 X 10 grid on pageload
window.onload = function() {
    createGrid(10);
}
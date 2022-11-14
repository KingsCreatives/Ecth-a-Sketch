//Getting elements on page
const clearBtn = document.querySelector('.clear-btn');
const colorPicker = document.querySelector("#color-picker");
const gridWrapper = document.querySelector(".grid-wrapper");
const colorBtns = document.querySelectorAll(".color");
let color = "black";



clearBtn.addEventListener('click', clearGrid);
//createGridBtn.addEventListener("click", makeGrid);


// Clear grid 
function clearGrid() {
    window.location.reload();
}


// Create Grid
function createGrid(num) {
    for (var rows = 0; rows < num; rows++) {
        for (var columns = 0; columns < num; columns++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            gridWrapper.append(grid);

            grid.style.width = parseInt(480) / num + 'px';
            grid.style.height = parseInt(480) / num + 'px';
        };
        var grids = gridWrapper.querySelectorAll(".grid");
        grids.forEach(grid => grid.addEventListener("mouseover", colorGrid));

    }
}

// Create grid with user selection
const slider = document.querySelector(".slider");

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
            this.style.backgroundColor = 'none';
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }
}

// Updates color variable when a color button is clicked
function changeColor(event) {
    switch (event.target.dataset.color) {
        case 'rainbow':
            color = 'rainbow';
            break;
        case 'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}



function userColor(event) {
    color = event.target.value;
}

colorPicker.addEventListener("change", userColor, false);
colorPicker.addEventListener("input", userColor, false);
colorBtns.forEach(colorBtn => colorBtn.addEventListener("click", changeColor));



// Create 10 X 10 grid on pageload
window.onload = function() {
    createGrid(10);
}
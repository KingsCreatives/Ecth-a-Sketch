const wrapper = document.querySelector('.grid-wrapper');
const gridDiv = document.getElementsByClassName('grid');
const newGridBtn = document.querySelector('#new-grid');
const randomColor = document.querySelector('.random-color');
const clearBtn = document.querySelector('.clear-btn');
const colorSelector = document.querySelector('#color-selector');

// Create 12 x 12 grid by default
function createGrid(num = 12) {
    for (var rows = 0; rows < num; rows++) {
        for (var columns = 0; columns < num; columns++) {
            const grid = document.createElement('div');
            grid.className = 'grid';
            wrapper.append(grid);

            grid.style.width = parseInt(480) / num + 'px';
            grid.style.height = parseInt(480) / num + 'px';

            grid.onmouseover = function() {
                grid.style.backgroundColor = 'black';
            };
        }
    }
}

// clear window
clearBtn.addEventListener('click', function() {
    window.location.reload();
});
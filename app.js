const wrapper = document.querySelector(".grid-wrapper");


function createGrid(num) {
    for (var rows = 0; rows < num; rows++) {
        for (var columns = 0; columns < num; columns++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            wrapper.append(grid);

            grid.style.width = parseInt(480) / num + "px";
            grid.style.height = parseInt(480) / num + "px";
        }
    }

}

createGrid(16);
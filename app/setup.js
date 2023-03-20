import order from './depth-first-app.js';

document.addEventListener("DOMContentLoaded", () => {
    setup();
})

function setup(){
    const maze = document.querySelector(".maze");
    addColor();
    const list = getList();
    animateMoves(list);
}

const open = 'open';
const closed = 'closed';
const cs50 = [
    [open, closed, open, closed, open, closed, closed, closed, open, open, closed, open],
    [open, closed, open, closed, open , open, open, closed, open, closed, closed, open],
    [open, open, open, closed, open, closed, open , open ,open, closed, closed, open],
    [closed, open, closed, closed, open, closed, open, closed, open, closed, closed, open],
    [closed, open, open, open,open, closed, open, closed, open, open, open, open],
    [closed, closed, closed, open, closed, closed, open, closed, closed, closed, closed, closed],
    [open, open, open, open, closed, closed, open, open, open, open, open, open],
]

function fillMaze(maze) {
    // const width = maze.getBoundingClientRect().width;
    // const height = maze.getBoundingClientRect().height;
    // const xNum = parseInt(width) / 30;
    // console.log(width, height);
    // console.log(xNum);
    // const yNum = parseInt(height) / 30;
    // console.log(yNum);
    // for (let i = 0; i < 150; i++) {
    //     const cell = document.createElement("div");
    //     cell.classList.add("cell");
    //     cell.innerHTML = i;
    //     cell.addEventListener("click", (c) => {
    //         c.style.backgroundColor = "black";
    //     })
    //     // maze.appendChild(cell);
    //     console.log(i)
    // }
}

function addColor() {
    const rows = document.querySelectorAll('tr');
    rows.forEach((row, i) => {
        row.querySelectorAll("td").forEach((cell, j) => {
            // color cell
            cell.style.backgroundColor = cs50[i][j] === 'open' ? 'black' : 'grey';
            // // setup original color 
            // cell.setAttribute('color', cs50[i][j] === 'open' ? 'black' : 'grey');
            // cell.addEventListener("click", () => {
                //     const ogColor = cell.getAttribute('color');
                //     // add color change
                //     const color = cell.style.backgroundColor;
            //     // cell.style.backgroundColor = color === 'purple' ? ogColor : 'purple';
            // })
        })
    })
};

function getList() {
    const squareList = [];
    // build array of cells 
    document.querySelectorAll('tr').forEach(row => {
        const rowCells = [];
        row.querySelectorAll('td').forEach(cell => {
            rowCells.push(cell);
        })
        squareList.push(rowCells);
    })
    return squareList;
}

function animateMoves(list) {
   order.forEach((move, index) => {
    setTimeout(() => {
         list[move[0]][move[1]].style.backgroundColor = 'yellow';
   }, 70 * index);
    })
}


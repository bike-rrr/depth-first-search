import order from './depth-first-app.js';

document.addEventListener("DOMContentLoaded", () => {
    setup();
})

const start = [6, 0];
const end = [0, 11];

const timeouts = [];
function setup(){
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

    // populate MAZE
    addColor(cs50, start, end);
    const mazeCoords = getCoordsList(start, end);

    // button algo clicks
    document.querySelector("#breadth").addEventListener("click", () => {
        for(let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
        addColor(cs50);
        animateMoves(mazeCoords,0);
    });
    
}

function addColor(cs50) {
    const rows = document.querySelectorAll('tr');
    rows.forEach((row, i) => {
        row.querySelectorAll("td").forEach((cell, j) => {
            if (atStart(i, j)) {
                cell.style.backgroundColor = 'red';
            } else if (atEnd(i, j)) {
                cell.style.backgroundColor = 'green';
            } else {
                cell.style.backgroundColor = cs50[i][j] === 'open' ? 'black' : 'grey';
            }
        })
    })
};

function atStart(i, j) {
    if (start[0] === i && start[1] === j) return true;
}

function atEnd(i, j) {
    if (end[0] === i && end[1] === j) return true;
}

function getCoordsList() {
    const squareList = [];
    document.querySelectorAll('tr').forEach(row => {
        const rowCells = [];
        row.querySelectorAll('td').forEach(cell => {
            rowCells.push(cell);
        })
        squareList.push(rowCells);
    });

    return squareList;
}

let speed = 220 - document.querySelector("input").value;
const range = document.querySelector("input");
range.addEventListener("input", (e) => speed = 220 - e.target.value)

function animateMoves(mazeCoords, index) {

    timeouts.push(setTimeout(() => {
        if (index >= order.length) {
            return;
        }

        const y = order[index][0];
        const x = order[index][1];

        if ((atStart(y, x) || atEnd(y, x))) {
        } else {
            mazeCoords[y][x].style.backgroundColor = 'yellow';
        }

        animateMoves(mazeCoords, ++index);
    }, speed));
}

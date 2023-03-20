import order from './depth-first-app.js';

document.addEventListener("DOMContentLoaded", () => {
    setup();
})

const start = [6, 0];
const end = [0, 11];

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
    animateMoves(mazeCoords);
}

function addColor(cs50, start, end) {
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

function animateMoves(mazeCoords) {
   order.forEach((cell, index) => {
    setTimeout(() => {
            if ((atStart(order[index][0], order[index][1]) || (atEnd(order[index][0], order[index][1])))) {
                return;
            }

            mazeCoords[cell[0]][cell[1]].style.backgroundColor = 'yellow';
        
   }, 70 * index + 1);
    })
}

function atStart(i, j) {
    if (start[0] === i && start[1] === j) return true;
}

function atEnd(i, j) {
    if (end[0] === i && end[1] === j) return true;
}
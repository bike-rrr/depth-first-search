import {breadth as breadthSearch} from './depth-first-app.js';
import {greedy as orderGreedy} from './greedy-first-app.js';
import {aStar as aStarSearch} from './a-star-app.js';
import {mazes} from './mazes.js';

document.addEventListener("DOMContentLoaded", () => {
    setup();
})

const start = [5, 5];
const end = [3, 3];

const timeouts = [];
function setup(){
    const open = 'open';
    const closed = 'closed';
    const map = mazes.keith;

    // populate MAZE
    addColor(map, start, end);
    const mazeCoords = getCoordsList(start, end);

    // button algo clicks
    document.querySelector("#breadth").addEventListener("click", (e) => {
            for(let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            addColor(map);
            console.log("STRT+++++ ", start)
            console.log("click orderBREadth is: ", breadthSearch(start, end, map));
            animateMoves(mazeCoords,0, breadthSearch(start, end, map));
            // document.querySelectorAll("button").forEach(btn => btn.classList.remove("current"));
            // e.target.classList.add("current");
        });

    document.querySelector("#greedy").addEventListener("click", (e) => {
        for(let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            addColor(map);
            animateMoves(mazeCoords,0, orderGreedy(start, end, map)); 
    })

       document.querySelector("#aStar").addEventListener("click", (e) => {
        for(let i = 0; i < timeouts.length; i++) {
                clearTimeout(timeouts[i]);
            }
            addColor(map);
            animateMoves(mazeCoords,0, aStarSearch(start, end, map)); 
    })
    
}

function addColor(map) {
    const rows = document.querySelectorAll('tr');
    rows.forEach((row, i) => {
        row.querySelectorAll("td").forEach((cell, j) => {
            if (atStart(i, j)) {
                cell.style.backgroundColor = 'red';
            } else if (atEnd(i, j)) {
                cell.style.backgroundColor = 'green';
            } else {
                cell.style.backgroundColor = map[i][j] === 'open' ? 'black' : 'grey';
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

function animateMoves(mazeCoords, index, orderVersion) {
    timeouts.push(setTimeout(() => {
        if (index >= orderVersion.length) {
            return;
        }

        const y = orderVersion[index][0];
        const x = orderVersion[index][1];

        if ((atStart(y, x) || atEnd(y, x))) {
        } else {
            mazeCoords[y][x].style.backgroundColor = 'yellow';
        }

        animateMoves(mazeCoords, ++index, orderVersion);
    }, speed));
}

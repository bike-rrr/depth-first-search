import {breadth as breadthSearch} from './algos/depth-first-app.js';
import {greedy as orderGreedy} from './algos/greedy-first-app.js';
import {aStar as aStarSearch} from './algos/a-star-app.js';
import {mazes} from './mazes.js';

document.addEventListener("DOMContentLoaded", () => {
    setup();
})

// GLOBAL VARS
const SELECT = document.querySelector("select");
SELECT.addEventListener("change", () => {
    setup();
})
const TIMEOUTS = [];

function setup(){
    const CURRENT_MAP = SELECT.value;
    const start = mazes[CURRENT_MAP].start;
    const end = mazes[CURRENT_MAP].end; 
    const map = mazes[CURRENT_MAP].map;

    // populate MAZE
    clearTimeouts(); // if we click button before done/ change map with selector
    addColor(map, start, end);
    const mazeCoords = getCoordsList(start, end);

    // button algo clicks
    document.querySelector("#breadth").addEventListener("click", (e) => {
            clearTimeouts();
            addColor(map, start, end);
            console.log(start, end, " foooop")
            animateMoves(mazeCoords,0, breadthSearch(start, end, map));
        });

    document.querySelector("#greedy").addEventListener("click", (e) => {
        for(let i = 0; i < TIMEOUTS.length; i++) {
                clearTimeout(TIMEOUTS[i]);
            }
            addColor(map, start, end);
            animateMoves(mazeCoords,0, orderGreedy(start, end, map)); 
    })

       document.querySelector("#aStar").addEventListener("click", (e) => {
        for(let i = 0; i < TIMEOUTS.length; i++) {
                clearTimeout(TIMEOUTS[i]);
            }
            addColor(map, start, end);
            animateMoves(mazeCoords,0, aStarSearch(start, end, map)); 
    })



    // HELPER FUNCTIONS
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
    
    function clearTimeouts() {
         for(let i = 0; i < TIMEOUTS.length; i++) {
                    clearTimeout(TIMEOUTS[i]);
                    console.log("clearing")
                }
    }
    let speed = 220 - document.querySelector("input").value;
    const range = document.querySelector("input");
    range.addEventListener("input", (e) => speed = 220 - e.target.value)
    
    function animateMoves(mazeCoords, index, orderVersion, start, end) {
        TIMEOUTS.push(setTimeout(() => {
            if (index >= orderVersion.length) {
                return;
            }
    
            const y = orderVersion[index][0];
            const x = orderVersion[index][1];
    
            if ((atStart(y, x, start) || atEnd(y, x, end))) {
            } else {
                mazeCoords[y][x].style.backgroundColor = 'yellow';
            }
    
            animateMoves(mazeCoords, ++index, orderVersion, start, end);
        }, speed));
    }

}    

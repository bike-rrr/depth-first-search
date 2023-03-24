// import {order2} from '../greedy-first-GOOD.js'

// console.log("THIS IS WINNNIG: ", order2);
// SETUP MAZE


const open = 'open';
const closed = 'closed';
const maze = {
    map: [
        [open, open, open, closed, closed, open, open, open, open, closed, open, closed],
        [open, open, open, open, closed, open, closed, closed, open, open, closed, open],
        [closed, closed, open, open, closed, open, open, open, open, closed, open, open],
        [closed, closed, open, open, closed, open, open, closed, open, open, closed, open],
        [closed, closed, open, open, open, closed, open, open, open, open, open, closed],
        [open, open, open, closed, open, open, open, open, open, open, open, open],
        [open, open, closed, open, open, open, open, closed, open, closed, closed, open]
    ],
    start: [6, 3],
    end: [5, 2]
}

function greedy(startSpot, endSpot, maze) {
    // console.log(startSpot, endSpot, maze, " for real")
    const open = "open";
    const closed = "closed";
    
    const colorsList = maze;
    const triedSquares = [];
    const optionList = [];
    
    // main list to be exported
    const order = [];
    
    const start = startSpot;
    const end = endSpot;
    let count = 0;
    
    // RUN MAZE
    search(start)
    return order;

    function search([y, x]) {
        // mark spot off
        triedSquares.push([y, x]);
        
    
        // add to orderList for animations
        order.push([y, x]);
        // are we at end?
        if (foundEnd([y, x])) {
            console.log("at END: ", [y, x]);
            return;
        }
    
        // how many options?
        findOptions([y, x]);
        greedyFirstPick(optionList); // this line was needed to fix major bug
    
        if (optionList.length === 0){
            console.log("we have no options")
            return;
        }
        else if (optionList.length === 1){
            console.log("onely one move bucko")
            search(optionList.pop());
            return;
        }
        if (optionList.length > 1) {
            // console.log ("more options")
            search(optionList.pop());
        }
    }
    
    function foundEnd([y, x]) {
        return (y === end[0] && x === end[1]);
    }
    
    function findOptions([y, x]) {
        let list = [];
        const rowLen = colorsList[0].length;
        const rowHeight = colorsList.length;
    
        // find LEFT or RIGHT
        for (let j = -1; j <= 1; j += 2) {
            if (x + j >= 0 && x + j < rowLen && colorsList[y][x + j] === open) {
                if (!spotTried([y, x + j])) {
                    list.push([y, x + j]);
                }
            }
        }
        // find TOP or BOTTOM
        for (let i = -1; i <= 1; i += 2) {
            if (y + i >= 0 && y + i < rowHeight && colorsList[y + i][x] === open) {
                if (!spotTried([y + i, x])) {
                    list.push([y + i, x]);
                }
            }
        }
        
        // // GREDDY FIRST SEARCH
        if (list.length > 1) {
            greedyFirstPick(list);
        }
        list.forEach(option => optionList.push(option));
    }
    
    function spotTried([y,x]) {
        let tried = false;
        triedSquares.forEach(coord => {
          if(coord[0] === y && coord[1] === x) {
            tried = true;
          }
        })
        triedSquares.push([y, x]);
        return tried;
    }
    
    function greedyFirstPick(opt) {
        opt.sort((a, b) => {
            let x = distance(a);
            let y = distance(b);
             return x > y ? -1 : 1;
        })
    }
    
    function distance([y, x]) {
        return Math.abs(end[0] - y) + Math.abs(end[1] - x)
    }
}
console.log(greedy(maze.start, maze.end, maze.map), "bitchhh");

export {greedy};
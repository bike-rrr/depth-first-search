// SETUP MAZE
const open = "open";
const closed = "closed";

const colorsList = [
    [open, closed, open, closed, open, closed, closed, closed, open, open, closed, open],
    [open, closed, open, closed, open , open, open, closed, open, closed, closed, open],
    [open, open, open, closed, open, closed, open , open ,open, closed, closed, open],
    [closed, open, closed, closed, open, closed, open, closed, open, closed, closed, open],
    [closed, open, open, open,open, closed, open, closed, open, open, open, open],
    [closed, closed, closed, open, closed, closed, open, closed, closed, closed, closed, closed],
    [open, open, open, open, closed, closed, open, open, open, open, open, open],
]

const triedSquares = [];
const optionList = [];

const start = [6, 0];
const end = [0, 9];
let count = 0;

// RUN MAZE
search([6, 0])

function search([y, x]) {
    // console.log("AT SPOT: ", [y, x]);
    // mark spot off
    triedSquares.push([y, x]);

    // are we at end?
    if (foundEnd([y, x])) {
        console.log("at END: ", [y, x]);
        return;
    }

    // how many options?
    findOptions([y, x]);
    console.log(`count is: #${count++}`, [y, x], " -> ", optionList)

    if (optionList.length === 0){
        console.log("we have no options")
        return;
    }
    // if only one option?
    else if (optionList.length === 1){
        console.log("onely one move bucko")
        search(optionList.pop());
        return;
    }
    // if we have multiple options?
    if (optionList.length > 1) {
        // console.log("more options")
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
    
    // GREDDY FIRST SEARCH
    if (list.length > 1) {
        console.log("GOTTA CHECK" , [y, x]);
        // console.log("BEFORE LLLLLLIIIIST: ", list);
       list = greedyFirst(list);
        // return list.forEach(option => optionList.push(option))
    }
    // console.log("LLSSSSSSSSSSTEND ", list);
    list.forEach(option => optionList.push(option))
}

function spotTried([y,x]) {
    let tried = false;
    triedSquares.forEach(coord => {
      if(coord[0] === y && coord[1] === x) {
        tried = true;
      }
    })
    return tried;
}

function greedyFirst(opt) {
    console.log("GREDDY BEFORE: ", opt)
    const ratings = [];
    console.log("GREEEEEDY AFTER ", opt);
    let tmp;
    if (distance(opt[0]) > distance(opt[1])) {
        ratings.push(opt[0]);
        ratings.push(opt[1]);
    } else {
        ratings.push(opt[1]); 
       ratings.push(opt[0]);
    }
    console.log(ratings, ' ratings')
    return ratings;
}

function distance([y, x]) {
    console.log((Math.abs(end[0] - y)) + (Math.abs(end[1] - x)) , " %%%%%%%% ABS", [y,x])
    return Math.abs(end[0] - y) + Math.abs(end[1] - x)
}


// why does 4-4 not change
// but 0-11 changes?

// 0-11 and 4-4 changes now with a -b 
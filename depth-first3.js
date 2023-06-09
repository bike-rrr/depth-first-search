class Square {
    constructor([y, x]) {
        this.y = y
        this.x = x;
        this.options = [];
        this.tried = true;
    }
}

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

// triedSpotList= []
const start = [6, 0];
const end = [0, 11];
const triedSquares = [];
const optionList = [];
// RUN MAZE
let count = 0;
search([6, 0])
function search([y, x]) {
    console.log(count++);
    // mark spot off
    triedSquares.push([y, x]);

    const square = new Square([y, x]);

    // are we at end?
    if (foundEnd(square)) {
        console.log("at END");
        return;
    }

    // how many options?
    const options = findOptions(square.y, square.x)
    console.log([y, x], " -> ", optionList)

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
        console.log("more options")
        // console.log(optionList);
        // triedSquares.push([y, x]);
        search(optionList.pop());
    }
}

function foundEnd(sqr) {
    return (sqr.y === end[0] && sqr.x === end[1]);
}

function findOptions(y, x) {
    const list = [];
    const rowLen = colorsList[0].length;
    const rowHeight = colorsList.length;
    // find LEFT or RIGHT
    for (let j = -1; j <= 1; j += 2) {
        if (x + j >= 0 && x + j < rowLen && colorsList[y][x + j] === open) {
            if (!spotTried(y, x + j)) {
                list.push([y, x + j]);
            }
        
        }
    }
    // find TOP or BOTTOM
    for (let i = -1; i <= 1; i += 2) {
        if (y + i >= 0 && y + i < rowHeight && colorsList[y + i][x] === open) {
            if (!spotTried(y + i, x)) {
                list.push([y + i, x]);
            }
        }
    }
    return list.forEach(option => optionList.push(option))
}

function spotTried(y,x) {
    // console.log('tried list: ', triedSquares)
    let tried = false;
    triedSquares.forEach(coord => {
      if(coord[0] === y && coord[1] === x) {
        tried = true;
      }
    })
    return tried;
}
// tridSPotList.push(spot)
// . are we at END?
    // yes?
        // END
    // how many options?
        // if one?
            // search(spot)
        // if > 1?
            // options.forEach(option => optionsList.push(option))

    // if (!optionsList.length) return
    // searcc(last option) && remove it from list






// triedSpotList = []
// tridSPotList.push(spot)
// . are we at END?
    // yes?
        // END
    // how many options?
        // if one?
            // search(spot)
        // if > 1?
            // options.forEach(option => optionsList.push(option))

    // if (!optionsList.length) return
    // searcc(last option) && remove it from list

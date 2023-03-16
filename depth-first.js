// SETUP GRID
class Square {
    constructor(open, x,y) {
        this.open = open;
        this.x = x;
        this.y = y;
    }
}
const open = true;
const closed = false;
const grid = [];
const colorsList = [  // STARTING FROM BOTTOM LEFT
    [open, open, open, open, closed, closed, open, open, open, open, open, open],
    [closed, closed, closed, open, closed, closed, open, closed, closed, closed, closed, closed],
    [closed, open, open, open,open, closed, open, closed, open, open, open, open],
    [closed, open, closed, closed, open, closed, open, closed, open, closed, closed, open],
    [open, open, open, closed, open, closed, open , open ,open, closed, closed, open],
    [open, closed, open, closed, open , open, open, closed, open, closed, closed, open],
    [open, closed, open, closed, open, closed, closed, closed, open, open, closed, open]
]

// STARTING FROM BOTTOM LEFT CORNER
for (let i = 0; i <= 6; i++){
    const row = [];
    for (let j = 0; j < 12; j++) {
        row.push(new Square(colorsList[i][j],j,i))
    }
    grid.push(row);
}

// console.log(grid)

// check each move we have at each spot
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < 12; j++) {
        for (let k = -1; k<=1; k+= 2) {
            // check left or right
            if (j + k >= 0 && j + k <= 11) {
                console.log(`${i}-${j}: adjecent spot ${i}-${j+k} is ${grid[i][j+k].open}`)
            } else {
                console.log(`${i}-${j}: adjecent spot ${i}-${j+k} is NOT OPEN`)
            }
        }
        for (let l = -1; l <=1; l+=2) {
            // check up or down
            if (i+l >= 0 && i+l <= 6) {
                console.log(`${i}-${j}: above or below spot  ${i}-${j+l} is ${grid[i+l][j].open} `)
            } else {
                console.log(`${i}-${j}: above or below spot  ${i}-${j+l} is NOT OPEN`)
            }
        }
    }
}

// make for loop to cycle through spots
// get list of available MOVES you can make with tried/untried
    // push them to an array
// try each move
    // if works => continue
    // if fails => mark tried
    // go to prev move thats untried
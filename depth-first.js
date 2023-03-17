// SETUP GRID
class Square {
    constructor(open, x,y) {
        this.open = open;
        this.x = x;
        this.y = y;
    }
}
const grid = [];
const open = true;
const closed = false;
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
            // check for LEFT spot OPEN
            if (j - 1 >= 0) {
                if (grid[i][j - 1].open) {
                    console.log(`${i}-${j}: spot ${i}-${j -1} on the LEFT is OPEN`)
                }
            }
            // check for RIGHT spot OPEN
            if (j + 1 <= 11) {
                if (grid[i][j+1].open) {
                    console.log(`${i}-${j}: spot ${i}-${j + 1} on the RIGHT is OPEN`)
                }
            }
            // check for BELOW spot OPEN
            if (i - 1 >= 0 ) {
                if (grid[i - 1][j].open) {
                    console.log(`${i}-${j}: spot ${i - 1}-${j} BELOW is OPEN`)
                }
            }
            // chekc for ABOVE spot OPEN
            if(i+1 <= 6) {
                if (grid[i + 1][j].open){
                    console.log(`${i}-${j}: spot ${i + 1}-${j} ABOVE is OPEN`)
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
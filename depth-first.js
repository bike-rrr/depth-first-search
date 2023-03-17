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
class Spot {
    constructor(options) {
        this.coord;
        this.options = [];
    }
}
class OpenOption {
    constructor(i, j) {
        this.coord = [i,j],
        this.tried = false;
    }
}

const moves = {
    spots:[]
}

// check each move we have at each spot
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < 12; j++) {
            // create new Spot
            const spot = new Spot()
            spot.coord = [i,j];
            // check for LEFT spot OPEN
            if (j - 1 >= 0) {
                if (grid[i][j - 1].open) {
                    const open = new OpenOption(i,j -1);
                    spot.options.push(open);
                }
            }
            // check for RIGHT spot OPEN
            if (j + 1 <= 11) {
                if (grid[i][j+1].open) {
                    const open = new OpenOption(i,j + 1);
                    spot.options.push(open);
                }
            }
            // check for BELOW spot OPEN
            if (i - 1 >= 0 ) {
                if (grid[i - 1][j].open) {
                    const open = new OpenOption(i - 1,j);
                    spot.options.push(open);
                }
            }
            // chekc for ABOVE spot OPEN
            if(i+1 <= 6) {
                if (grid[i + 1][j].open){
                    const open = new OpenOption(i + 1,j);
                    spot.options.push(open);
                }
            } 
            moves.spots.push(spot);
    }
}


const start = [0,0];
const end = [6, 31];
let found = false;

function go(spot) {
    console.log(spot.coord, end)
    // get curr coords
    const currCoords = [spot.coord[0], spot.coord[1]];
  
    // are we at END?
    if (currCoords[0] === end[0] && currCoords[1] === end[1]) {
        // end program
        console.log("FINISHED");
        found = true;
        return;
    }
    // are there no options?
    if (spot.options.length === 0) {
        console.log("NOTHING FOUND")
        return;
    }

    // get all OPTIONS and try them
    const options = spot.options.filter(spot => spot.tried === false);
    options.forEach(option => {
        if (found) return;
        option.tried = true;
        go(moves.spots[moves.spots.findIndex(spot => spot.coord[0] === option.coord[0] && spot.coord[1] === option.coord[1])]);
    })
}

// Start Maze Search
go(moves.spots[0])
if (!found){console.log("not found")}

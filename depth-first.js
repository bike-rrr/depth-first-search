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

class Spot {
    constructor(options) {
        this.coord;
        this.options = [];
    }
}
class Open {
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
                    const open = new Open(i,j -1);
                    spot.options.push(open);
                    console.log(`${i}-${j}: spot ${i}-${j -1} on the LEFT is OPEN`)
                }
            }
            // check for RIGHT spot OPEN
            if (j + 1 <= 11) {
                if (grid[i][j+1].open) {
                    const open = new Open(i,j + 1);
                    spot.options.push(open);
                    console.log(`${i}-${j}: spot ${i}-${j + 1} on the RIGHT is OPEN`)
                }
            }
            // check for BELOW spot OPEN
            if (i - 1 >= 0 ) {
                if (grid[i - 1][j].open) {
                    const open = new Open(i - 1,j);
                    spot.options.push(open);
                    console.log(`${i}-${j}: spot ${i - 1}-${j} BELOW is OPEN`)
                }
            }
            // chekc for ABOVE spot OPEN
            if(i+1 <= 6) {
                if (grid[i + 1][j].open){
                    const open = new Open(i + 1,j);
                    spot.options.push(open);
                    console.log(`${i}-${j}: spot ${i + 1}-${j} ABOVE is OPEN`)
                }
            } 
            moves.spots.push(spot);
    }
}
// console.log(moves.spots[74].options)

// moves.spots.forEach(spot => console.log(spot.coord));
// make for loop to cycle through spots
// check each spot around to see what way we can move
    // push them to an array
// try each move
    // if works => continue
    // if fails => mark tried
    // go to prev move thats untried
// console.log(moves.spots[1].options)

// 

const start = [0,0];
const end = [6, 11];
// go(beginning)
function go(spot) {
    // get curr coords
    const currCoords = [spot.coord[0], spot.coord[1]];

    // are we at END?
    if (currCoords[0] === end[0] && currCoords[1] === end[1]) {
        // end program
        console.log("FINISHED");
    }

    // are there no options?
    if (spot.options.length === 0) {
        // end program => unsolveable
        console.log("NOTHING FOUND")
        return;
    }

    // filter(tried => false)options.forEach(option)
    const options = spot.options.filter(spot => spot.tried === false);
    console.log("options: ", options);
    options.forEach(option => {
        option.tried = true;
        // go(option);
    })
}
go(moves.spots[0])
    // mark option tried
    // go(option)

// go throguh maze now
function goBad(entry, lastSpot){
    // console.log(entry.coord[0] === start[0] && entry.coord[1] === start[1]);
    
    // get entry spot options
    // go through each option that tried = false;

    entry.options.filter(spot => spot.tried !== true).forEach(spot => {
       console.log(spot.coord, spot.coord[0] === end[0] && spot.coord[1] === end[1])
       // mark option tried = true and go to 1st option
       spot.tried = true;
       // get coords where at
    const currCoords = entry.coord;
    // are we at end?
    const atEnd = currCoords[0] === end[0] && currCoords[1] === end[1];
    console.log(atEnd);
    // lastSpot have options?
        // yes -go back there
        // no- go to next option
    
    })  
        // no?
            // goback to last spot
                // go(lastSpot, lastSpot)

}

// goBad(moves.spots[0], 0);
// moves.spots.forEach(spot => console.log(spot))

// go(coord, lastSpot)
// get curr coords
// are we at END?
    // END program
// are there no options?
    // Go Back to Last Coordinate
        // filter options not tried
        // options.forEach
            // this option = lastSpot
            // tried = true
            // are we at End?
                // yes => end
                // no => 

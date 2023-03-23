// SETUP MAZE
function aStar(startSpot, endSpot, maze) {
    const open = "open";
    const closed = "closed";
    
    const triedSquares = [];
    const optionList = [];
    const colorsList = maze;
    const order = [];
    let found = false;
    let count = 0;
    
    const start = startSpot;
    const end = endSpot;
    
    // RUN MAZE
    search(start);
    
    function search([y, x]) {
        if (found) return;
        console.log('count: ', ++count, [y, x], optionList);
        // mark spot off
        triedSquares.push([y, x]);
    
         // add to orderList for animations
        order.push([y, x]);
    

        // are we at end?
         if (foundEnd([y, x])) {
            console.log("at END: ", [y, x]);
            found = true;
            return;
        }
    
        // get list of options
        const list = findOptions([y, x]);
        list.forEach(option => {
            optionList.push(option);
            triedSquares.push(option);
        })
    
        // alternate checking each option
        for (let i = 0; i < optionList.length; i++) {
            search(optionList.shift());
        }
    }
    
    // HELPER FUNCTIONS
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
        return list;
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
    
    function foundEnd([y, x]) {
    return (y === end[0] && x === end[1]);
    }
            // search(spot)
        // if (found) console.log("found")
            // return
        // mark spot off 
        // console.log(spot)
        // are we at end?
            // console.log("found", spot)
        // find options
            // options.forEach
                // optList.push(spot)
        // optionList.forEach(spot)
            // search(spot)
return order;

}

export {aStar};
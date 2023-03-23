const open = "open"
const closed = "closed";
const mazes = {};
mazes.cs50 = {
    map:[
        [open, closed, open, closed, open, closed, closed, closed, open, open, closed, open],
        [open, closed, open, closed, open , open, open, closed, open, closed, closed, open],
        [open, open, open, closed, open, closed, open , open ,open, closed, closed, open],
        [closed, open, closed, closed, open, closed, open, closed, open, closed, closed, open],
        [closed, open, open, open,open, closed, open, closed, open, open, open, open],
        [closed, closed, closed, open, closed, closed, open, closed, closed, closed, closed, closed],
        [open, open, open, open, closed, closed, open, open, open, open, open, open],
    ]
    ,
    start: [6, 0],
    end:[0, 11]

}

mazes.keith = {
    map: [
    [closed, closed, closed, open, open, open, open, closed, open, open, open, closed],
    [open, open, open, open, closed, closed, open, open, open, closed, open, closed],
    [open,closed,closed,closed,closed,closed,closed,closed,closed,closed,open, closed],
    [open, open, open, open, closed, open, open, open, closed, closed, open, closed],
    [closed, closed, closed, open, closed, open, closed, open, open, open, open, closed],
    [closed, closed, closed, open, closed, open, closed, closed, closed, closed, closed, closed],
    [closed, closed, closed, open, open, open, closed, closed, closed, closed, closed, closed]
],
    start: [5, 5],
    end: [3, 3]
}

function make() {
    const list = [];
    for (let i = 0; i < 7; i++){
        let row = [];
        for (let j = 0; j < 12; j++){
            const rand = Math.random();
            if (rand < .5) {
                row.push(open);
            } else {
                row.push(closed)
            }
        }
        list.push(row);
    }
    const spots = [];
    const start = [];
    const end = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[0].length; j++) {
            if (list[i][j] === open) {
                spots.push([i,j]);
            }
        }
    } 
    const randStart = spots[Math.floor(Math.random() * spots.length)];
    spots.slice(randStart);
    const randEnd = spots[Math.floor(Math.random() * spots.length)]; 
    return {map:list, start:randStart, end:randEnd}
}

mazes.random = make();


export {mazes};
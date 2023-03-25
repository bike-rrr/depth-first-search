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

mazes.fucked = {
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

mazes.shit = {
    map: [
        [closed, open, open, closed, open, open, open, closed, open, open, open, closed],
        [closed, open, open, closed, closed, closed, open, open, open, open, closed, open],
        [open, closed, open, open, closed, closed, closed, open, open, open, closed, open],
        [open, closed, open, open, open, closed, open, closed, closed, open, open, open],
        [open, closed, open, open, open, open, open, open, open, open, open, open],
        [open, closed, closed, closed, closed, open, open, open, open, closed, open, closed],
        [open, open, closed, closed, open, open, open, open, open, open, closed, open]
    ],
    start: [6, 5],
    end: [0, 5]
}

function make() {
    const list = [];
    const openSpots = [];
    for (let i = 0; i < 7; i++){
        let row = [];
        for (let j = 0; j < 12; j++){
            const rand = Math.random();
            if (rand < .7) {
                row.push(open);
                openSpots.push([i, j])
            } else {
                row.push(closed)
            }
        }
        list.push(row);
    }

    const start = [];
    const end = [];
    let random = Math.floor(Math.random() * openSpots.length);
    const randStart = openSpots[random];
    openSpots.splice(random, 1);
    const randEnd = openSpots[Math.floor(Math.random() * openSpots.length)];

    return {map:list, start:randStart, end:randEnd}
}

mazes.random = make();


export {mazes};
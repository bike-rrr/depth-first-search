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



export {mazes};
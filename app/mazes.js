const open = "open"
const closed = "closed";
const mazes = {};
mazes.cs50 = [
        [open, closed, open, closed, open, closed, closed, closed, open, open, closed, open],
        [open, closed, open, closed, open , open, open, closed, open, closed, closed, open],
        [open, open, open, closed, open, closed, open , open ,open, closed, closed, open],
        [closed, open, closed, closed, open, closed, open, closed, open, closed, closed, open],
        [closed, open, open, open,open, closed, open, closed, open, open, open, open],
        [closed, closed, closed, open, closed, closed, open, closed, closed, closed, closed, closed],
        [open, open, open, open, closed, closed, open, open, open, open, open, open],
    ]

mazes.keith = [
    [closed, closed, closed, open, open, open, open, closed, open, open, open, closed],
    [open, open, open, open, closed, closed, open, open, open, closed, open, closed],
    [open,closed,closed,closed,closed,closed,open,closed,closed,closed,open, closed],
    [open, open, open, open, closed, open, open, open, closed, closed, open, closed],
    [closed, closed, closed, open, closed, open, closed, open, open, open, open, closed],
    [closed, closed, closed, open, closed, open, closed, closed, closed, closed, closed, closed],
    [closed, closed, closed, open, open, open, closed, closed, closed, closed, closed, closed]
]

export {mazes};
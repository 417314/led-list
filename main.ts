let list: number[][] = []
basic.forever(function () {
    basic.clearScreen()
    list = [
    [
    0,
    0,
    1,
    0,
    0
    ],
    [
    0,
    1,
    1,
    1,
    0
    ],
    [
    0,
    1,
    1,
    1,
    0
    ],
    [
    1,
    1,
    1,
    1,
    1
    ],
    [
    0,
    0,
    1,
    0,
    0
    ]
    ]
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4; x++) {
            if (list[index][x] == 1) {
                led.plot(x, index)
            } else {
                led.unplot(x, index)
            }
        }
    }
})

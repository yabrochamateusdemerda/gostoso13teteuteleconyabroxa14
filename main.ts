let P2_pontos = 0
let P1_pontos = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Let´s play")
    basic.pause(randint(1000, 4567))
    basic.showIcon(IconNames.Scissors)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    P2_pontos += 1
    basic.showNumber(2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    P1_pontos = 1
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})

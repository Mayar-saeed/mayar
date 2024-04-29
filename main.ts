input.onButtonPressed(Button.A, function () {
    basic.showString("Mayar ")
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Baghlaf ")
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(5)
})

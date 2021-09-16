input.onButtonPressed(Button.A, function () {
    시간 += 1
    basic.showNumber(시간)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 시간; index++) {
        basic.pause(60000)
    }
})
let 시간 = 0
시간 = 0

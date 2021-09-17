input.onButtonPressed(Button.A, function () {
    초 += 1
    basic.showNumber(초)
})
function 타이머정지 () {
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
    pins.digitalWritePin(DigitalPin.P0, 0)
    초 = 0
}
input.onButtonPressed(Button.AB, function () {
    타이머정지()
})
input.onButtonPressed(Button.B, function () {
    countdown = 초
    for (let index = 0; index < 초; index++) {
        basic.showNumber(countdown)
        basic.pause(1000)
        countdown = countdown - 1
    }
    basic.showIcon(IconNames.EigthNote)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
let 거리 = 0
let countdown = 0
let 초 = 0
초 = 0
countdown = 0
// 초음파센서 이용해서 타이머 정지시키기
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
    거리 = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 40
    if (거리 <= 50) {
        타이머정지()
    }
})

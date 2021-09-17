input.onButtonPressed(Button.A, function () {
    초 += 1
    basic.showNumber(초)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
    pins.digitalWritePin(DigitalPin.P0, 0)
    초 = 0
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
let countdown = 0
let 초 = 0
초 = 0
countdown = 0

input.onButtonPressed(Button.A, function () {
    분 += 1
    basic.showNumber(분)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    music.stopAllSounds()
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 분; index++) {
        basic.pause(60000)
        분 = 분 - 1
        basic.showNumber(분)
    }
    basic.showIcon(IconNames.EigthNote)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
    pins.digitalWritePin(DigitalPin.P0, 1)
})
let 분 = 0
분 = 0

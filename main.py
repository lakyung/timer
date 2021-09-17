def on_button_pressed_a():
    global 초
    초 += 1
    basic.show_number(초)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global 초
    basic.show_icon(IconNames.YES)
    music.stop_all_sounds()
    pins.digital_write_pin(DigitalPin.P0, 0)
    초 = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global 반복, 초
    for index in range(초):
        반복 += 1
        basic.show_number(초)
        basic.pause(5000)
        basic.show_icon(IconNames.HEART)
        초 = 초 - 1
    basic.show_number(반복)
    basic.pause(100)
    basic.show_icon(IconNames.EIGTH_NOTE)
    music.start_melody(music.built_in_melody(Melodies.RINGTONE),
        MelodyOptions.FOREVER)
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

반복 = 0
초 = 0
초 = 0
반복 = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showString("WELCOME")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})

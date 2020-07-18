function ALARM () {
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
}
radio.onReceivedString(function (receivedString) {
    ALARM()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("THIEF")
    ALARM()
})
radio.setGroup(1)

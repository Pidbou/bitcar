radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        BitCar.stop()
        basic.showIcon(IconNames.Heart)
        BitCar.standup_still(100, 250)
        basic.pause(250)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Pitch") {
        fwd = value * -50 / 90
    }
    if (name == "Roll") {
        turn = value * 20 / 90
    }
})
let turn = 0
let fwd = 0
radio.setGroup(1)
basic.forever(function () {
    BitCar.move(fwd + turn, fwd - turn)
})

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        control.waitMicros(500000)
    }
    while (true) {
    	
    }
})

input.onButtonPressed(Button.A, function () {
    datalogger.log(
    datalogger.createCV("temp", input.temperature()),
    datalogger.createCV("brightness", input.lightLevel())
    )
})
datalogger.deleteLog()
basic.forever(function () {
	
})

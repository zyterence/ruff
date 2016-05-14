'use strict';

var events = require('events');
var emitter = new events.EventEmitter();
var timer;

emitter.on('toggle_button', function() {
	if (!timer) {
		timer = setInterval(function() {
			if ($('#led-r').isOn()) {
				$('#led-r').turnOff();
			} else {
				$('#led-r').turnOn();
			}
		}, 2000);
	} else {
		clearInterval(timer);
		$('#led-r').turnOff();
		timer = null;
	}
});

$.ready(function(error) {
	if (error) {
		console.log(error);
		return;
	}

	$('#red_button').on('push', function() {
		emitter.emit('toggle_button');
	});
});

$.end(function() {
	clearInterval(timer);
	timer = null;
	$('#led-r').turnOff();
});
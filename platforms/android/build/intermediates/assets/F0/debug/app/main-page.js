var dom = require("nativescript-dom");
var buttonModule = require("ui/button");
var Controller = require('./controller');

exports.pageLoaded = function(args) {

	let buttons = args.object.getElementsByClassName('general');
	let actions = args.object.getElementsByClassName('system');
	let result = args.object.getElementById('result');
	let input = args.object.getElementById('text_field');

	let controller = new Controller(input);

	//binding events for digit buttons
	buttons.forEach((button) => {
		button.on(buttonModule.Button.tapEvent, function () {

			input.text += button.text;

			//set the cursor position of input to end
			input.android.setSelection(input.text.length);
		});
	})

	//binding events for system buttons (like as addition)
	actions.forEach((button) => {
		button.on(buttonModule.Button.tapEvent, function () {

			controller.action(button.action);
		});
	})

	//binding result button event
	result.on(buttonModule.Button.tapEvent, () => controller.result());
};

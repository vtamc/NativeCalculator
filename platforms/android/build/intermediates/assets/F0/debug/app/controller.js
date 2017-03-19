'use strict'

/**
 * Calculator controller
 */
class Controller {

	/**
	 * @param  {object} input TextField from dom model
	 */
	constructor (input) {
		this.__action = '';
		this.buffer = 0;
		this.input = input;
	}

	get currentValue () {
		return parseFloat(this.input.text);
	}

	set currentValue (value) {
		this.input.text = value;
	}

	/**
	 * Set an action of next step
	 * @param  {string} action
	 */
	action (action) {
		this.__action = action;
		this.buffer = this.currentValue || 0;
		this.currentValue = '';
	}

	add () {
		this.buffer += this.currentValue;
	}

	sub () {
		this.buffer -= this.currentValue;
	}

	mul () {
		this.buffer *= this.currentValue;
	}

	div () {
		this.buffer /= this.currentValue;
	}

	/**
	 * Calculate result
	 */
	result () {
		this[this.__action]();
		this.currentValue = this.buffer;
	}
}

module.exports = Controller;
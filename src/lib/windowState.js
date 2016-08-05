'use strict';

const path = require('path');
const jetpack = require('fs-jetpack');
const checkState = require('./checkState');
const loadState = require('./loadState');
const saveState = require('./saveState');
const utils = require('../utils/utils');

const stateFile = path.join(utils.getAppDataPath(), utils.getManifestData().name, 'windowStates.json');

module.exports = class WindowStateManager {

	constructor(name, options) {
		this._isInitialized = false;

		this._name = name;
		this._defaultWidth = options.defaultWidth;
		this._defaultHeight = options.defaultHeight;
	}

	get name() {
		return this._name;
	}

	get width() {
		this._checkState();
		return this._width;
	}

	get height() {
		this._checkState();
		return this._height;
	}

	get x() {
		this._checkState();
		return this._x;
	}

	get y() {
		this._checkState();
		return this._y;
	}

	get maximized() {
		this._checkState();
		return this._maximized;
	}

	get bounds() {
		this._checkState();
		return {
			width: this._width,
			height: this._height
		};
	}

	saveState(window) {
		return saveState.sync(this._name, window, stateFile, this._defaultWidth, this._defaultHeight);
	}

	_checkState() {
		if(!this._isInitialized) {
			let state = checkState.sync(this._name, stateFile, this._defaultWidth, this._defaultHeight);
			this._width = state.width;
			this._height = state.height;
			this._x = state.x;
			this._y = state.y;
			this._maximized = state.maximized;

			this._isInitialized = true;
		}
	}
};

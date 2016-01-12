'use strict';

module.exports = class PseudoBrowserWindow {

    constructor(options) {
        this._width = options.width;
        this._height = options.height;
        this._x = options.x !== 'undefined' ? options.x : 0;
        this._y = options.y !== 'undefined' ? options.y : 0;

        this._isFullScreen = options.isFullScreen;
        this._isMaximized = options.isMaximized;
    }

    getBounds() {
        return {
            width: this._width,
            height: this._height,
            x: this._x,
            y: this._y
        };
    }

    isFullScreen() {
        return this._isFullScreen;
    }

    isMaximized() {
        return this._isMaximized;
    }
};

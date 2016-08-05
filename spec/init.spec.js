'use strict';

const proxyquire = require('proxyquire');
const stubs = require('./helpers/stubs.js');
const WindowStateManager = proxyquire('../main.js', stubs.electron().screenRight);

describe('Initialize and set default values', function() {
	let name = 'testWindow';
	let defaultWidth = 1024;
	let defaultHeight = 768;

	var wsm = new WindowStateManager(name, {
		defaultWidth: defaultWidth,
		defaultHeight: defaultHeight
	});

	it("should set the name", () => {
		expect(wsm.name).toBe(name);
	});

	it("should set the default width", () => {
		expect(wsm.width).toBe(defaultWidth);
	});

	it("should set the default height", () => {
		expect(wsm.height).toBe(defaultHeight);
	});

	it("should set the bounds", () => {
		expect(wsm.bounds.width).toBe(defaultWidth);
		expect(wsm.bounds.height).toBe(defaultHeight);
	});
});

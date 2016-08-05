'use strict';

const WindowStateManager = require('../');
const PseudoBrowserWindow = require('./helpers/pseudoBrowserWindow');

describe('IO', () => {
	var name = 'testWindowIO';
	var defaultWidth = 1024;
	var defaultHeight = 768;

	it("should save the state", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 800,
			height: 600,
			x: 50,
			y: 60,
			isFullScreen: false,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should load the state", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.width).toBe(800);
		expect(wsm.height).toBe(600);
		expect(wsm.x).toBe(50);
		expect(wsm.y).toBe(60);
		expect(wsm.maximized).toBe(false);
	});

	it("should not save on fullscreen window", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 1920,
			height: 1080,
			x: 0,
			y: 0,
			isFullScreen: true,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(false);
	});

	it("should not load saved values from a fullscreen window", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.width).not.toBe(1920);
		expect(wsm.height).not.toBe(1080);
		expect(wsm.x).not.toBe(0);
		expect(wsm.y).not.toBe(0);
		expect(wsm.maximized).toBe(false);
	});

	it("should not save the bounds of a maximized window", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 1600,
			height: 800,
			x: 5,
			y: 7,
			isFullScreen: false,
			isMaximized: true
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should not load the bounds of a previously maximized window", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.width).not.toBe(1600);
		expect(wsm.height).not.toBe(800);
		expect(wsm.x).not.toBe(5);
		expect(wsm.y).not.toBe(7);
		expect(wsm.maximized).toBe(true);
	});
});

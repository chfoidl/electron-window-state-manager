'use strict';

const proxyquire = require('proxyquire');
const stubs = require('./helpers/stubs.js');
var WindowStateManager = proxyquire('../main.js', stubs.electron().screenRight);
const PseudoBrowserWindow = require('./helpers/pseudoBrowserWindow');

describe('Check multi monitor functionality', function() {
	var name = 'testWindowIO';
	var defaultWidth = 1024;
	var defaultHeight = 768;

	it("should save the position on the second monitor to the right", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 800,
			height: 600,
			x: 2500,
			y: 800,
			isFullScreen: false,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should load the window on the second monitor to the right", () => {
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).toBe(2500);
		expect(wsm.y).toBe(800);
	});

	it("should reset window position if out of bounds on right monitor", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenLeft);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).not.toBe(2500);
		expect(wsm.y).not.toBe(800);
		expect(wsm.x).toBe(448);
		expect(wsm.y).toBe(156);
	});

	/**
	 *    Left
	 */


	it("should save the position on the second monitor to the left", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenLeft);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 800,
			height: 600,
			x: -900,
			y: 800,
			isFullScreen: false,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should load the window on the second monitor to the left", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenLeft);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).toBe(-900);
		expect(wsm.y).toBe(800);
	});

	/**
	 *    Top
	 */

	it("should save the position on the second monitor to the top", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenTop);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 800,
			height: 600,
			x: 1200,
			y: -700,
			isFullScreen: false,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should load the window on the second monitor to the top", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenTop);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).toBe(1200);
		expect(wsm.y).toBe(-700);
	});

	/**
	 *    Bottom
	 */

	it("should save the position on the second monitor to the bottom", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenBottom);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		let window = new PseudoBrowserWindow({
			width: 800,
			height: 600,
			x: 1200,
			y: 1500,
			isFullScreen: false,
			isMaximized: false
		});

		expect(wsm.saveState(window)).toBe(true);
	});

	it("should load the window on the second monitor to the bottom", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenBottom);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).toBe(1200);
		expect(wsm.y).toBe(1500);
	});

	it("should reset window position if out of bounds on bottom monitor", () => {
		WindowStateManager = proxyquire('../main.js', stubs.electron().screenTop);
		let wsm = new WindowStateManager(name, {
			defaultWidth: defaultWidth,
			defaultHeight: defaultHeight
		});

		expect(wsm.x).not.toBe(1200);
		expect(wsm.y).not.toBe(1500);
		expect(wsm.x).toBe(448);
		expect(wsm.y).toBe(156);
	});

	/**
	 *    Triple Monitor
	 */

	 it("should save the position on the right monitor (triple monitor)", () => {
		 WindowStateManager = proxyquire('../main.js', stubs.electron().tripleMonitor);
		 let wsm = new WindowStateManager(name, {
			 defaultWidth: defaultWidth,
			 defaultHeight: defaultHeight
		 });

		 let window = new PseudoBrowserWindow({
			 width: 800,
			 height: 600,
			 x: 2500,
			 y: 500,
			 isFullScreen: false,
			 isMaximized: false
		 });

		 expect(wsm.saveState(window)).toBe(true);
	 });

	 it("should load the position on the right monitor (triple monitor)", () => {
		 WindowStateManager = proxyquire('../main.js', stubs.electron().tripleMonitor);
		 let wsm = new WindowStateManager(name, {
			 defaultWidth: defaultWidth,
			 defaultHeight: defaultHeight
		 });

		 expect(wsm.x).toBe(2500);
		 expect(wsm.y).toBe(500);
	 });

	 it("should save the position on the left monitor (triple monitor)", () => {
		 WindowStateManager = proxyquire('../main.js', stubs.electron().tripleMonitor);
		 let wsm = new WindowStateManager(name, {
			 defaultWidth: defaultWidth,
			 defaultHeight: defaultHeight
		 });

		 let window = new PseudoBrowserWindow({
			 width: 800,
			 height: 600,
			 x: -800,
			 y: 500,
			 isFullScreen: false,
			 isMaximized: false
		 });

		 expect(wsm.saveState(window)).toBe(true);
	 });

	 it("should load the position on the left monitor (triple monitor)", () => {
		 WindowStateManager = proxyquire('../main.js', stubs.electron().tripleMonitor);
		 let wsm = new WindowStateManager(name, {
			 defaultWidth: defaultWidth,
			 defaultHeight: defaultHeight
		 });

		 expect(wsm.x).toBe(-800);
		 expect(wsm.y).toBe(500);
	 });

	 it("should reset window position if left monitor is unplugged (triple monitor)", () => {
		 WindowStateManager = proxyquire('../main.js', stubs.electron().screenRight);
		 let wsm = new WindowStateManager(name, {
			 defaultWidth: defaultWidth,
			 defaultHeight: defaultHeight
		 });

		 expect(wsm.x).not.toBe(-800);
		 expect(wsm.y).not.toBe(500);
		 expect(wsm.x).toBe(448);
		 expect(wsm.y).toBe(156);
	 });
});

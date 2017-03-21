'use strict';

const utils = require('../utils/utils');


var baseStub = {
	app: {
		getPath: (type) => {
			if (type === 'appData') {
				return utils.getAppDataPath();
			}
		},
		getName: () => {
			return utils.getManifestData().name
		},
	}
};

module.exports = {
	electron: () => {
		return {
			screenRight: {
				electron: Object.assign({
					screen: {
						getPrimaryDisplay: function () {
							return {
								bounds: {
									x: 0,
									y: 0,
									width: 1920,
									height: 1080
								}
							};
						},

						getAllDisplays: function() {
							return {
								find: function (cb) {
									cb({
										bounds: {
											x: 1920,
											y: 0,
											width: 1920,
											height: 1080
										}
									});
									return {
										bounds: {
											x: 1920,
											y: 0,
											width: 1920,
											height: 1080
										}
									};
								}
							};
						}
					},
					'@global': true,
					'@noCallThru': true
				}, baseStub)
			},

			screenLeft: {
				electron: Object.assign({
					screen: {
						getPrimaryDisplay: function () {
							return {
								bounds: {
									x: 0,
									y: 0,
									width: 1920,
									height: 1080
								}
							};
						},

						getAllDisplays: function() {
							return {
								find: function (cb) {
									cb({
										bounds: {
											x: -1920,
											y: 0,
											width: 1920,
											height: 1080
										}
									});
									return {
										bounds: {
											x: -1920,
											y: 0,
											width: 1920,
											height: 1080
										}
									};
								}
							};
						}
					},
					'@global': true,
					'@noCallThru': true
				}, baseStub)
			},

			screenTop: {
				electron: Object.assign({
					screen: {
						getPrimaryDisplay: function () {
							return {
								bounds: {
									x: 0,
									y: 0,
									width: 1920,
									height: 1080
								}
							};
						},

						getAllDisplays: function() {
							return {
								find: function (cb) {
									cb({
										bounds: {
											x: 0,
											y: -1080,
											width: 1920,
											height: 1080
										}
									});
									return {
										bounds: {
											x: 0,
											y: -1080,
											width: 1920,
											height: 1080
										}
									};
								}
							};
						}
					},
					'@global': true,
					'@noCallThru': true
				}, baseStub)
			},

			screenBottom: {
				electron: Object.assign({
					screen: {
						getPrimaryDisplay: function () {
							return {
								bounds: {
									x: 0,
									y: 0,
									width: 1920,
									height: 1080
								}
							};
						},

						getAllDisplays: function() {
							return {
								find: function (cb) {
									cb({
										bounds: {
											x: 0,
											y: 1080,
											width: 1920,
											height: 1080
										}
									});
									return {
										bounds: {
											x: 0,
											y: 1080,
											width: 1920,
											height: 1080
										}
									};
								}
							};
						}
					},
					'@global': true,
					'@noCallThru': true
				}, baseStub)
			},

			tripleMonitor: {
				electron: Object.assign({
					screen: {
						getPrimaryDisplay: function () {
							return {
								bounds: {
									x: 0,
									y: 0,
									width: 1920,
									height: 1080
								}
							};
						},

						getAllDisplays: function() {
							return {
								find: function (cb) {
									cb({
										bounds: {
											x: 1920,
											y: 0,
											width: 1920,
											height: 1080
										}
									});
									return [
										{
											bounds: {
												x: 1920,
												y: 0,
												width: 1920,
												height: 1080
											}
										},
										{
											bounds: {
												x: -1920,
												y: 0,
												width: 1920,
												height: 1080
											}
										}
									];
								}
							};
						}
					},
					'@global': true,
					'@noCallThru': true
				}, baseStub)
			}
		};
	}
};

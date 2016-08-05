'use strict';

module.exports = {
	electron: function () {
		return {
			screenRight: {
				electron: {
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
				}
			},

			screenLeft: {
				electron: {
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
				}
			},

			screenTop: {
				electron: {
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
				}
			},

			screenBottom: {
				electron: {
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
				}
			},

			tripleMonitor: {
				electron: {
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
				}
			}
		};
	}
};

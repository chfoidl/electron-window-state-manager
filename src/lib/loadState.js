'use strict';

const jetpack = require('fs-jetpack');

var sync = (stateFile) => {
	if (!jetpack.exists(stateFile)) {
		return {states: []};
	} else {
		return jetpack.read(stateFile, 'json');
	}
};

module.exports.sync = sync;

'use strict';

var renditionByHeader = require('./header');

module.exports.register = function RenditionRegister(plugin, options, next) {
	var defaults = {
		requestHeader: 'Accept',
		responseHeader: 'content-type',
		error: {
			status: 400,
			message: 'specified version does not exist'
		}
	};

	for (var prop in options) {
		if (options.hasOwnProperty(prop)) {
			defaults[prop] = options[prop];
		}
	}

	renditionByHeader(plugin, defaults);

	next();
};

exports.register.attributes = {
	pkg: require('./package.json')
};

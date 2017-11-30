'use strict';

var boom = require('boom'),
		semver = require('semver');

module.exports = function RenditionByHeader(plugin, options) {
	plugin.ext('onPreHandler', function versioningPreHandler(request, reply) {
		var rendition = request.route.settings.plugins.rendition,
		  versions = rendition.versions,
			handler = null,
			version = request.headers[options.requestHeader];

		if (!version || !versions) {
			return reply.continue();
		}

		handler = versions[version];

		if (!handler) {
			for (var key in versions) {
				if (semver.validRange(key) && semver.satisfies(version, key)) {
					handler = versions[key];
					break;
				}
			}
		}

		if (handler === true) {
			reply.continue();
		} else if (typeof handler === 'function') {
			handler(request, reply);
		} else {
			return reply(boom.create(options.error.status, options.error.message));
		}
	});
};

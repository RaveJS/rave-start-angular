var angular = require('angular');

angular.module('hello.filter', [])
	.filter('interpolate', [
		'version', function (version) {
			return function (text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
		}
	]);

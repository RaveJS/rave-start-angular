var angular = require('angular');

require('./filters');
require('./services');
require('./directives');
require('./controllers');

module.exports = angular
	.module('myApp', [
		'ngRoute',
		'myApp.filters',
		'myApp.services',
		'myApp.directives',
		'myApp.controllers'
	])
	.config([
		'$routeProvider', function ($routeProvider) {
			$routeProvider.when(
				'/',
				{ templateUrl: 'app/base.html', controller: 'BaseCtrl' }
			);
			$routeProvider.otherwise({ redirectTo: '/' });
		}
	]);

angular.bootstrap(document, ['myApp']);

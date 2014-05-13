var angular = require('angular');

// import the hello UI component
require('./hello/main');

// compose the app and the routes
module.exports = angular
	.module('myApp', [
		'ngRoute',
		'hello'
	])
	.config([
		'$routeProvider', function ($routeProvider) {
			$routeProvider.when(
				'/',
				{ templateUrl: 'hello/base.html', controller: 'HelloCtrl' }
			);
			$routeProvider.otherwise({ redirectTo: '/' });
		}
	]);

// start the application
angular.bootstrap(document, ['myApp']);

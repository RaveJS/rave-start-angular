var angular = require('angular');

// import the hello modules
require('./controller');
require('./directive');
require('./filter');
require('./service');

// compose the hello UI component
module.exports = angular
	.module('hello', [
		'hello.controller',
		'hello.directive',
		'hello.filter',
		'hello.service'
	]);

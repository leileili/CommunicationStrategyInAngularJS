'use strict';

// Defining Angular app model with all other dependent modules
var mostPopularListingsApp = angular.module('mostPopularListingsApp',['ngRoute',
	'mostPopularListingsApp.home','mostPopularListingsApp.about','mostPopularListingsApp.login','mostPopularListingsApp.test','comNavigationModule','contentContainerModule', 'sendMessageWithEmitBroadcastModule','sendMessageWithPubSubModule','sendMessageWithRootScopeModule','sendMessageWithServiceModule']);

mostPopularListingsApp.config(function($routeProvider, $locationProvider, $httpProvider) {
	
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	$routeProvider.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];


});



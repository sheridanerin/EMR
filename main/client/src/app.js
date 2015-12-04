angular.module('EMR', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'templates/homeTmpl.html',
				controller: 'homeCtrl'
			})

			$urlRouterProvider.otherwise('/');


});
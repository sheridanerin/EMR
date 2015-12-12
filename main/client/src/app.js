angular.module('EMRapp', ['ui.router', 'ngMaterial'])
	.config(function( $stateProvider, $urlRouterProvider ) {

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'templates/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.state('userHome', {
				url:'/userhome',
				templateUrl: 'templates/userHomeTmpl.html',
				controller: 'userHomeCtrl',
				resolve: {
					user: function( authService ) {
						return authService.getAuth();
					}
				}
			})
			.state('newPatient', {
				url:'/newpatient',
				templateUrl: 'templates/newPatientTmpl.html',
				controller: 'newPatientCtrl',
				resolve: {
					user: function( authService ) {
						return authService.getAuth();
					}
				}
			})
			.state('searchResults', {
				url:'/searchresults',
				templateUrl: 'templates/searchResultsTmpl.html',
				controller: 'searchResultsCtrl',
				resolve: {
					user: function( authService ) {
						return authService.getAuth();
					}
				}
			})
			.state('fullSchedule', {
				url:'/fullschedule',
				templateUrl: 'templates/fullScheduleTmpl.html',
				controller: 'fullScheduleCtrl',
				resolve: {
					user: function( authService ) {
						return authService.getAuth();
					}
				}
			})
			.state('patientChart', {
				url:'/patientchart',
				templateUrl: 'templates/patientChartTmpl.html',
				controller: 'patientChartCtrl',
				resolve: {
					user: function( authService ) {
						return authService.getAuth();
					}
				}
			})
			.state('admin', {
				url:'/admin',
				templateUrl: 'templates/adminTmpl.html',
				controller: 'adminCtrl',
				resolve: {
					userList: function( userService ) {
						return userService.getUsers();
					},
					user: function( authService ) {
						return authService.getAdminAuth();
					}
				}
			})

			$urlRouterProvider.otherwise('/');
			
});

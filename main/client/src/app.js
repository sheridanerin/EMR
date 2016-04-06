angular.module('EMRapp', ['ui.router', 'ngMaterial'])
	.config(function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

		var stupidMD = $mdThemingProvider.extendPalette('blue', {
    		'500': '005566'
  		});

  		$mdThemingProvider.definePalette('mainBlue', stupidMD);

  		$mdThemingProvider.theme('default')
    		.primaryPalette('mainBlue')

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
					// user: function( authService ) {
					// 	return authService.getAuth();
					// },
					appointments: function( appointmentsService ) {
						var today = new Date();
						return appointmentsService.getDayAppointments(today);
					}
				}
			})
			.state('newPatient', {
				url:'/newpatient',
				templateUrl: 'templates/newPatientTmpl.html',
				controller: 'newPatientCtrl',
				resolve: {
					// user: function( authService ) {
					// 	return authService.getAuth();
					// }
				}
			})
			.state('searchResults', {
				url:'/searchresults',
				templateUrl: 'templates/searchResultsTmpl.html',
				controller: 'searchResultsCtrl',
				resolve: {
					// user: function( authService ) {
					// 	return authService.getAuth();
					// }
				}
			})
			.state('fullSchedule', {
				url:'/fullschedule/:date',
				templateUrl: 'templates/fullScheduleTmpl.html',
				controller: 'fullScheduleCtrl',
				resolve: {
					appointments: function( appointmentsService, $stateParams ) {
						// if ($stateParams.date) {
						// 	var today = new Date($stateParams.date);
						// } else {
							var today = new Date();
						// }
						return appointmentsService.getDayAppointments(today);
					},
					// user: function( authService ) {
					// 	return authService.getAuth();
					// }
					// appointments: function( appointmentsService ) {
					// 	return appointmentsService.getAppointments().then(function( res ) {
					// 		return res;
					// 	});
					// }
				}
			})
			.state('patientChart', {
				url:'/patientchart/:patientid',
				templateUrl: 'templates/patientChartTmpl.html',
				controller: 'patientChartCtrl',
				resolve: {
					// user: function( authService ) {
					// 	return authService.getAuth();
					// },
					patient: function( patientService, $stateParams ) {
						if ( $stateParams.patientid ) {
							return patientService.getOnePatient( $stateParams.patientid );
						} else {
							return { data: null };
						}
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
					}
					// user: function( authService ) {
					// 	return authService.getAdminAuth();
					// }
				}
			})

			$urlRouterProvider.otherwise('/');
			
});
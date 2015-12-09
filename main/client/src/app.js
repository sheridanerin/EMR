angular.module('EMRapp', ['ui.router', 'ngMaterial', 'ui.rCalendar'])
	.config(function($stateProvider, $urlRouterProvider) {



		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'templates/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.state('userHome', {
				url:'/userhome',
				templateUrl: 'templates/userHomeTmpl.html',
				controller: 'userHomeCtrl'
			})
			.state('newPatient', {
				url:'/newpatient',
				templateUrl: 'templates/newPatientTmpl.html',
				controller: 'newPatientCtrl'
			})
			.state('searchResults', {
				url:'/searchresults',
				templateUrl: 'templates/searchResultsTmpl.html',
				controller: 'searchResultsCtrl'
			})
			.state('fullSchedule', {
				url:'/fullschedule',
				templateUrl: 'templates/fullScheduleTmpl.html',
				controller: 'fullScheduleCtrl'
			})
			.state('patientChart', {
				url:'/patientchart',
				templateUrl: 'templates/patientChartTmpl.html',
				controller: 'patientChartCtrl'
			})

			$urlRouterProvider.otherwise('/');
			
});

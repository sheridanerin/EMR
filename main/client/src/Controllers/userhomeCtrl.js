angular.module('EMRapp')
.controller('userHomeCtrl', function( $scope, appointments, appointmentsService ) {

		
		$scope.getDate = function() {
			var date = new Date();
		}

		$scope.appointments = appointments.data;

		$scope.getDayAppointments = function( date ) {
			appointmentsService.getDayAppointments(date).then(function( appointments ) {
				$scope.appointments = appointments.data;
			});
		} 
	
});


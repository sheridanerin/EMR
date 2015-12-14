angular.module('EMRapp').directive('calendarDir', function() {
	return {
		  restrict: 'E'
		, templateUrl: 'templates/calendarTmpl.html'
		, scope: {
			  appointment: '='
			, index: '='
		}
		, controller: function( $state, $scope, appointmentsService ) {

			$scope.$watch('appointment', function() {
				setTop();
				setHeight();
			});

			function setTop() {
				$scope.top = -42

				if ( $scope.appointment.startTime === 8.5) {
					$scope.top = 122;
				} else {
					for (var i = 7; i <= $scope.appointment.startTime; i += 0.5) {
						$scope.top += 41;
					}
				}
			}
			setTop();

			function setHeight() {
				$scope.height = (( $scope.appointment.endTime - $scope.appointment.startTime ) * 80 );
			}
			setHeight();

			$scope.deleteAppointment = function() {
				appointmentsService.deleteAppointment( $scope.appointment ).then(function( response ) {
					$state.go('fullSchedule', {}, { reload: true });
				}).catch(function( err ) {
					console.error( err );
				});
			}
		}
	}
});
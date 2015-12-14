angular.module('EMRapp').directive('calendarDir', function() {
	return {
		  restrict: 'E'
		, templateUrl: 'templates/calendarTmpl.html'
		, scope: {
			  appointment: '='
			, index: '='
		}
		, controller: function( $scope ) {
			$scope.height = (( $scope.appointment.endTime - $scope.appointment.startTime ) * 80 );

			$scope.top = -42;
				for (var i = 7; i <= $scope.appointment.startTime; i += 0.5) {
				$scope.top += 41;
			}
		}
	}
});
angular.module('EMRapp')
.directive('mainCalendarDir', function() {
	
	return {
		  restrict: 'E'
		, templateUrl: 'templates/mainCalendarTmpl.html'
		, controller: function( $scope ) {
    		$scope.calendarTimes = ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'];
		}
	}

});
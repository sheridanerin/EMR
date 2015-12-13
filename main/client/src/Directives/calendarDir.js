angular.module('EMRapp').directive('calendarDir', function() {
	return {
		  restrict: 'E'
		, templateUrl: 'templates/calendarTmpl.html'
		, scope: {
			  appointment: '='
			, index: '='
		}
		, controller: function( $scope ) {
			// $scope.getHeight: function() {
			// 	return (( $scope.appointment.endTime - $scope.appointment.startTime ) * 80 ) + 'px';
			// }

			// $scope.getTop: function() {
			// 	return (( $scope.appointment.startTime * 15) + $scope.getHeight() ) + 'px';
			// }
			$scope.height = (( $scope.appointment.endTime - $scope.appointment.startTime ) * 80 );

			$scope.top = 0;
				for (var i = 7; i <= $scope.appointment.startTime; i += 0.5) {
				$scope.top += 40
			}
			// $scope.top = (( $scope.appointment.startTime * 40) + $scope.height - 80);

		// 	switch( $scope.appointment.startTime ) {
		// 		case 7:
		// 			$scope.top = 0; 
		// 			break;
		// 		case 7.5:
		// 			$scope.top = 40; 
		// 			break;
		// 		case 8:
		// 			$scope.top = 80; 
		// 			break;
		// 		case 8.5:
		// 			$scope.top = 120; 
		// 			break;
		// 		case 9:
		// 			$scope.top = 160; 
		// 			break;
		// 		case 9.5:
		// 			$scope.top = 200; 
		// 			break;
		// 		case 10:
		// 			$scope.top = 240; 
		// 			break;
		// 		case 10.5:
		// 			$scope.top = 280; 
		// 			break;
		// 		case 11:
		// 			$scope.top = 320; 
		// 			break;
		// 		case 11.5:
		// 			$scope.top = 360; 
		// 			break;
		// 		case 12:
		// 			$scope.top = 400; 
		// 			break;
		// 		case 12.5:
		// 			$scope.top = 440; 
		// 			break;
		// 		case 13:
		// 			$scope.top = 480; 
		// 			break;
		// 		case 13.5:
		// 			$scope.top = 520; 
		// 			break;
		// 		case 14:
		// 			$scope.top = 560; 
		// 			break;
		// 		case 14.5:
		// 			$scope.top = 600; 
		// 			break;
		// 		case 15:
		// 			$scope.top = 640; 
		// 			break;
		// 		case 15.5:
		// 			$scope.top = 680; 
		// 			break;
		// 		case 16:
		// 			$scope.top = 720; 
		// 			break;
		// 		case 16.5:
		// 			$scope.top = 760; 
		// 			break;
		// 		case 17:
		// 			$scope.top = 800; 
		// 			break;
		// 		case 17.5:
		// 			$scope.top = 840; 
		// 			break;
		// 		case 18:
		// 			$scope.top = 880; 
		// 			break;
		// 		case 18.5:
		// 			$scope.top = 920; 
		// 			break;
		// 		case 19:
		// 			$scope.top = 960; 
		// 			break;
		// 		case 19.5:
		// 			$scope.top = 1000; 
		// 			break;
		// 		case 20:
		// 			$scope.top = 1040; 
		// 			break;
		// 	}
		// }
		// , link: function(scope, element, attrs) {
		// 	var duration = scope.appointment.endTime - scope.appointment.startTime;
		// 	var thisDiv = element.find('div');
		// 	$(thisDiv).css('height', function() {
		// 		return duration * 80;
		// 	});
			// element.css('height', (duration * 80) + 'px');
			// $('#appointment' + scope.index).css('top', (scope.appointment.startTime * 31).toString() + 'px');
			// $('#appointment' + scope.index).css('background-color', 'blue');
		}
	}
});
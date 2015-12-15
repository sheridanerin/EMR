angular.module('EMRapp').directive('calendarDir', function() {
	return {
		  restrict: 'E'
		, templateUrl: 'templates/calendarTmpl.html'
		, scope: {
			  appointment: '='
			, index: '='
		}
		, controller: function( $state, $scope, appointmentsService, $mdDialog, $mdMedia ) {

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
			};
			setTop();

			function setHeight() {
				$scope.height = (( $scope.appointment.endTime - $scope.appointment.startTime ) * 80 );
			};
			setHeight();

			$scope.deleteAppointment = function() {
				appointmentsService.deleteAppointment( $scope.appointment ).then(function( response ) {
					$state.go('fullSchedule', {}, { reload: true });
				}).catch(function( err ) {
					console.error( err );
				});
			};

			$scope.showAdvanced = function(ev) {
				$scope.selected = $scope.appointment;
				console.log($scope.selected);
				$mdDialog.show({
					controller: DialogController,
					templateUrl: '../templates/dialogTmpl.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose:true,
					fullscreen: $mdMedia('sm') && $scope.customFullscreen,
					locals: {
						selected: $scope.selected
					}
				})
				.then(function(answer) {
					$scope.status = 'You said the information was "' + answer + '".';
				}, function() {
					$scope.status = 'You cancelled the dialog.';
				});
				$scope.$watch(function() {
					return $mdMedia('sm');
				}, function(sm) {
					$scope.customFullscreen = (sm === true);
				});
			};

		}
	}
});

function DialogController($scope, $mdDialog, selected) {
	$scope.selected = selected;
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
};

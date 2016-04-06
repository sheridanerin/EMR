angular.module('EMRapp')
	.controller('homeCtrl', function( $scope, authService ) {
	
	$scope.login = function() {
		authService.login($scope.user);
		// console.log($scope.user);
	}

});
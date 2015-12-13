angular.module('EMRapp')
.controller('adminCtrl', function( $scope, userService, userList ) {
	
	$scope.permissions = {
		  insuranceInfo: false
		, visitNotes: false
		, patientGoals: false
	}

	$scope.addNewUser = function() {
		$scope.user.pemissions = $scope.permissions;
		userService.addNewUser($scope.user);
	}

	$scope.getUsers = function() {
		userService.getUsers();
	}

	$scope.users = userList.data;
	
});
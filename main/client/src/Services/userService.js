angular.module('EMRapp')
.service('userService', function( $http, $state ) {

	this.addNewUser = function( user ) {
		
		$http.post('/api/signup', user).then(function( data, err ) {
			if (err) {
				return alert('Server Error, User not Saved');
			}
			
			if (data) {
				$state.go('admin', {}, {reload: true});
			}
		});

	};
	
	this.getUsers = function() {

		return $http.get('/api/users');

	};

});
angular.module('EMRapp')
.service('authService', function( $http, $state ) {

	var currentUser;

	this.getAuth = function() {
		// console.log("help!!!!");
		return $http.get('/api/auth').success(function(user) {
			currentUser = user;
			console.log(user);
			return user;
		}).error(function(err) {
			$state.go('home')
		});
	};

	this.getAdminAuth = function() {
		return $http.get('/api/adminauth').success(function(user) {
			currentUser = user;
			return user;
		}).error(function(err) {
			$state.go('home');
		});
	};

	this.login = function( user ) {
		return $http.post('/api/login', user).success(function(user) {
			currentUser = user;
			if (user.admin) {
				$state.go('admin');
			} else {
			$state.go('userHome');
			}
		});
	}

	this.currentUser = function() {
		return currentUser;
	}
	
});
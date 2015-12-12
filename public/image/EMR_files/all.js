angular.module('EMRapp', ['ui.router', 'ngMaterial'])
	.config(["$stateProvider", "$urlRouterProvider", function( $stateProvider, $urlRouterProvider ) {

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'templates/homeTmpl.html',
				controller: 'homeCtrl'
			})
			.state('userHome', {
				url:'/userhome',
				templateUrl: 'templates/userHomeTmpl.html',
				controller: 'userHomeCtrl',
				// resolve: {
				// 	user: function( authService ) {
				// 		return authService.getAuth();
				// 	}
				// }
			})
			.state('newPatient', {
				url:'/newpatient',
				templateUrl: 'templates/newPatientTmpl.html',
				controller: 'newPatientCtrl',
				// resolve: {
				// 	user: function( authService ) {
				// 		return authService.getAuth();
				// 	}
				// }
			})
			.state('searchResults', {
				url:'/searchresults',
				templateUrl: 'templates/searchResultsTmpl.html',
				controller: 'searchResultsCtrl',
				// resolve: {
				// 	user: function( authService ) {
				// 		return authService.getAuth();
				// 	}
				// }
			})
			.state('fullSchedule', {
				url:'/fullschedule',
				templateUrl: 'templates/fullScheduleTmpl.html',
				controller: 'fullScheduleCtrl',
				// resolve: {
				// 	user: function( authService ) {
				// 		return authService.getAuth();
				// 	}
				// }
			})
			.state('patientChart', {
				url:'/patientchart',
				templateUrl: 'templates/patientChartTmpl.html',
				controller: 'patientChartCtrl',
				// resolve: {
				// 	user: function( authService ) {
				// 		return authService.getAuth();
				// 	}
				// }
			})
			.state('admin', {
				url:'/admin',
				templateUrl: 'templates/adminTmpl.html',
				controller: 'adminCtrl',
				resolve: {
					userList: ["userService", function( userService ) {
						return userService.getUsers();
					}],
					user: ["authService", function( authService ) {
						return authService.getAdminAuth();
					}]
				}
			})

			$urlRouterProvider.otherwise('/');
			
}]);

angular.module('EMRapp')
.controller('adminCtrl', ["$scope", "userService", "userList", function( $scope, userService, userList ) {
	
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
	
}]);

angular.module('EMRapp')
	.controller('homeCtrl', ["$scope", "authService", function( $scope, authService ) {
	
	$scope.login = function() {
		authService.login($scope.user);
	}

}]);
angular.module('EMRapp')
.controller('navBarCtrl', ["$scope", "patientService", "$timeout", "$q", "$log", "$mdDialog", function( $scope, patientService, $timeout, $q, $log, $mdDialog ) {
	
    var self = this;
    self.simulateQuery = false;
    self.isDisabled    = false;
    // self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    loadAll().then(function( patients ) {
    	  console.log(patients);
    	  self.repos = patients;
    });

    function querySearch (query) {
      	var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
        	deferred;

        return results;
    }
    
    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }
    
    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    // Build `components` list of key/value pairs
    function loadAll() {
    	  var deferred = $q.defer();
	   	  var patients;

	   	  patientService.getPatients().then(function( result ) {
	   		
	   		var repos = result.data;
	   		patients = repos.map( function (repo) {
	        	repo.value = repo.firstName.toLowerCase();
	        	return repo;
	      })
	      deferred.resolve(patients);

	   	}).catch(function( err ) {
	   		return console.error(err);
	   	})

	   	console.log(deferred.promise);
	   	return deferred.promise;
    }

    // Create filter function for a query string
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
      	    console.log(item);
            return (item.value.indexOf(lowercaseQuery) === 0);
        };
    }
  
    // Menu Stuff
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

}]);




























angular.module('EMRapp')
.controller('newPatientCtrl', ["$scope", "patientService", function( $scope, patientService ) {
	
	$scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
					'October', 'November', 'December'];
	$scope.years = [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 
					1984, 1985, 1986, 1987, 1988, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 
					1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 
					2013, 2014, 2015].reverse();
	$scope.states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 
					'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 
					'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 
					'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
	$scope.genders = ['Female', 'Male'];
	$scope.conditions = {
		  seasonalAllergies: false	
		, anemia: false				
		, tensionHeadaches: false	
		, osteoarthritis: false		
		, asthma: false		
		, positiveTBTest: false		
		, GIBleed: false			
		, anxiety: false 		
		, emphsemaCOPD: false		
		, atrialFibrillation: false
		, migraines: false
		, stomachUlcer: false
		, rheumatoidArthritis: false
		, ADDADHD: false
		, GERD: false
		, acne: false
		, depression: false
		, glaucoma: false
		, cataracts: false
		, gout: false
		, diabetes: false
		, eczema: false
		, psoriasis: false
		, hearingLoss: false
		, seizureDisorder: false
		, hypothyroidism: false
		, hyperthyroidism: false	
		, visionLoss: false
		, other: {
			  checked: false
			, condition: ''
		}
	};

	$scope.addNewPatient = function() {
		$scope.patient.conditions = $scope.conditions;
		$scope.patient.insuranceInfo =[$scope.insuranceInfo];
		patientService.addNewPatient($scope.patient);
	}

}]);
angular.module('EMRapp')
.controller('patientChartCtrl', ["$scope", function( $scope ) {
	
	

}]);

angular.module('EMRapp')
.controller('userHomeCtrl', ["$scope", function( $scope ) {


	

}]);
angular.module('EMRapp').directive('navbarDir', function() {
		return {
			  restrict: 'E'
			, templateUrl: 'templates/navBarTmpl.html'
			, controller: 'navBarCtrl'
		}
});

angular.module('EMRapp')
.service('authService', ["$http", "$state", function( $http, $state ) {

	this.getAuth = function() {
		return $http.get('/api/auth').success(function(user) {
			return user;
		}).error(function(err) {
			$state.go('home')
		});
	};

	this.getAdminAuth = function() {
		return $http.get('/api/adminauth').success(function(user) {
			return user;
		}).error(function(err) {
			$state.go('home');
		});
	};

	this.login = function( user ) {
		return $http.post('/api/login', user).success(function(user) {
			if (user.admin) {
				$state.go('admin');
			} else {
			$state.go('userHome');
			}
		});
	}
	
}]);
angular.module('EMRapp')
.service('patientService', ["$state", "$http", function( $state, $http ) {

	this.addNewPatient = function( patient ) {
		
		$http.post('/api/patient', patient).then(function( data, err ) {
			if (err) {
				return alert('Server Error, Patient not Saved');
			}
			
			if (data) {
				$state.go('userHome');
			}
		});

	};

	this.getOnePatient = function() {

		$http.get('api/patient')
		
	};

	this.getPatients = function() {

		return $http.get('/api/patients');
	
	};

}]);
angular.module('EMRapp')
.service('userService', ["$http", "$state", function( $http, $state ) {

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

}]);
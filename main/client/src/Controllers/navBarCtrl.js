angular.module('EMRapp')
.controller('navBarCtrl', function( $scope, $state, patientService, $timeout, $q, $log, $mdDialog, authService ) {
	
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
    self.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.redirect = function( state ) {
        $state.go( state );
    }

    $scope.currentUser = authService.currentUser();



});




























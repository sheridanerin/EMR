angular.module('EMRapp')
.controller('fullScheduleCtrl', function( $scope, $state, patientService, $timeout, $q, $log, appointments, appointmentsService ) {
	
	// var $scope = this;
    $scope.simulateQuery = false;
    $scope.isDisabled    = false;
    // $scope.repos         = loadAll();
    $scope.querySearch   = querySearch;
    $scope.selectedItemChange = selectedItemChange;
    $scope.searchTextChange   = searchTextChange;

    loadAll().then(function( patients ) {

    	  $scope.repos = patients;
    });

    function querySearch (query) {
      	var results = query ? $scope.repos.filter( createFilterFor(query) ) : $scope.repos,
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

	   	return deferred.promise;
    }

    // Create filter function for a query string
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(item) {
            return (item.value.indexOf(lowercaseQuery) === 0);
        };
    }

    $scope.times = [
    	{
    		display: '7:00 AM'
            , value: 7
        },
        {
            display: '7:30 AM'
            , value: 7.5
        },
        {
              display: '8:00 AM'
    		, value: 8
    	},
    	{
    		  display: '8:30 AM'
    		, value: 8.5
    	},
    	{
    		  display: '9:00 AM'
    		, value: 9
    	},
    	{
    		  display: '9:30 AM'
    		, value: 9.5
    	},
    	{
    		  display: '10:00 AM'
    		, value: 10
    	},
    	{
    		  display: '10:30 AM'
    		, value: 10.5
    	},
    	{
    		  display: '11:00 AM'
    		, value: 11
    	},
    	{
    		  display: '11:30 AM'
    		, value: 11.5
    	},
    	{
    		  display: '12:00 PM'
    		, value: 12
    	},
    	{
    		  display: '12:30 PM'
    		, value: 12.5
    	},
    	{
    		  display: '1:00 PM'
    		, value: 13
    	},
    	{
    		  display: '1:30 PM'
    		, value: 13.5
    	},
    	{
    		  display: '2:00 PM'
    		, value: 14
    	},
    	{
    		  display: '2:30 PM'
    		, value: 14.5
    	},
    	{
    		  display: '3:00 PM'
    		, value: 15
    	},
    	{
    		  display: '3:30 PM'
    		, value: 15.5
    	},
    	{
    		  display: '4:00 PM'
    		, value: 16
    	},
    	{
    		  display: '4:30 PM'
    		, value: 16.5
    	},
    	{
    		  display: '5:00 PM'
    		, value: 17
    	},
    	{
    		  display: '5:30 PM'
    		, value: 17.5
    	},
    	{
    		  display: '6:00 PM'
    		, value: 18
    	},
    	{
    		  display: '6:30 PM'
    		, value: 18.5
    	},
    	{
    		  display: '7:00 PM'
    		, value: 19
    	},
    	{
    		  display: '7:30 PM'
    		, value: 19.5
    	},
    	{
    		  display: '8:00 PM'
    		, value: 20
    	},
    ];

    

    $scope.addNewAppointment = function() {
    	$scope.appointment.patient = $scope.selectedItem._id;
		appointmentsService.addNewAppointment($scope.appointment);
	}

    $scope.appointments = appointments.data;

    $scope.getDayAppointments = function( date ) {
        appointmentsService.getDayAppointments(date).then(function( appointments ) {
            $scope.appointments = appointments.data;
        });
    } 


});





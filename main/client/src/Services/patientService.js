angular.module('EMRapp')
.service('newClientService', function( $state, $http ) {

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
	}


});
angular.module('EMRapp')
.service('patientService', function( $state, $http ) {

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

	this.getOnePatient = function( patientid ) {

		return $http.get('api/patient?id=' + patientid);
		
	};

	this.getPatients = function() {

		return $http.get('/api/patients');
	
	};

	this.updatePatient = function( patient ) {

		return $http.put('/api/patient/update?id=' + patient._id, { changed: patient }).then(function( response ) {
			return response.data;
		}).catch( function( err ) {
			console.error( err );
		});

	};

	this.updatePatientHist = function( patient ) {

		return $http.put('/api/patient/updateconditions?id=' + patient._id, { changed: patient.conditions }).then(function( response ) {
			return response.data;
		}).catch( function( err ) {
			console.error( err );
		});

	};

	this.updateInsuranceInfo = function( patient ) {
		console.log(patient.insuranceInfo)

		return $http.put('/api/patient/updateinfo?patientid=' + patient._id, { changed: patient.insuranceInfo }).then(function( response ) {
			return response.data;
		}).catch( function( err ) {
			console.error( err );
		});

	};

	this.saveNewNote = function( note, patientid ) {

		return $http.post('/api/patient/newnote?id=' + patientid, note);
	
	}  


});
angular.module('EMRapp')
.service('appointmentsService', function( $http, $state ) {

	this.addNewAppointment = function( appointment ) {
		
		$http.post('/api/appointment', appointment).then(function( data, err ) {
			if (err) {
				return alert('Server Error, Appointment not Saved');
			}
			
			if (data) {
				$state.go('fullSchedule', {}, {reload: true});
			}
		});

	};

	this.getAppointments = function() {
		return $http.get('/api/appointments').success(function( response ) {
			return response.data;
		}).catch(function( err ) {
			return console.error( err );
		});
	}

	this.getDayAppointments = function( date ) {
		date.setHours(0, 0, 0, 0);

		return $http.get('api/dayappointments?day=' + date);

	}

	this.deleteAppointment = function( appointment ) {
		return $http.delete('/api/appointment?id=' + appointment._id);
		
	};

});
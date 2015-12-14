angular.module('EMRapp')
.controller('patientChartCtrl', function( $scope, patient, patientService ) {
	
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

	$scope.patient = patient.data;

	$scope.saveContactInfo = function() {
		patientService.updatePatient( $scope.patient );
		$scope.editing = null;
	}

	$scope.saveMedHist = function() {
		patientService.updatePatientHist( $scope.patient );
		$scope.editing = null;
	}

	$scope.saveInsuranceInfo = function() {
		patientService.updateInsuranceInfo( $scope.patient );
		$scope.editing = null;
	}

	$scope.saveNewNote = function() {
		patientService.saveNewNote( $scope.historicalVisitNotes, $scope.patient._id ).then(function( response ) {
			patientService.getOnePatient( response.data._id ).then(function( patient ) {
				$scope.patient = patient.data;
				$scope.editing = null;
				$scope.historicalVisitNotes = {};
				// $scope.patient.historicalVisitNotes.reverse();
			});
		});
	}

	// if ($scope.patient.historicalVisitNotes) {
	// 	$scope.patient.historicalVisitNotes.reverse();
	// }
});
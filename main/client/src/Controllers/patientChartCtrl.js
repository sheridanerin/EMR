angular.module('EMRapp')
.controller('patientChartCtrl', function( $scope, patient ) {
	
	$scope.patient = patient.data;

});
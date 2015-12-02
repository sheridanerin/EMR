var Patient = require('../models/patient.js');	

module.exports = {

	addPatient: function( req, res ) {
		new Patient(req.body).save(function( err, patient ) {
			if (err) { 
				res.status(500).send(err);
			} else {
				res.send(patient);
			}
		});
	},

	getPatients: function( req, res ) {
		Patient.find(function( err, patients ) {
			if (err) {
				return console.error(err);
			} else {
			res.send(patients);
			}
		});
	},

	getPatient: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {
			if (err) {
				return console.error(err);
			} else {
			res.send(patient);
			}
		});
	},

	// updatePatient: function( req, res ) {
	// 	Patient.findById(req.query.id, function( err, patient ) {
	// 		if (err) {
	// 			return console.error(err);
	// 		} else {
	// 		res.send(patient);
	// 		}
	// 	});
	// },


};








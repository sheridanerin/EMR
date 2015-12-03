var Patient = require('../models/patient.js');	

module.exports = {

	addPatient: function( req, res ) {
		new Patient(req.body).save(function( err, patient ) {
			if (err) { 
				res.status(500).send(err);
			}
			res.send(patient);
		});
	},

	getPatients: function( req, res ) {
		Patient.find(function( err, patients ) {
			if (err) {
				return console.error(err);
			}
			res.send(patients);
		});
	},

	getPatient: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {
			if (err) {
				return console.error(err);
			}
			res.send(patient);
		});
	},

	updatePatient: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {

			for ( var property in req.body.changed ) {
				if ( typeof patient[property] !== 'object' ) {
					patient.set(property, req.body.changed[property]);
				}
			}		
			patient.save(function( err, updatedPatient ) {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(updatedPatient)

			})
		})	
	},

	addNewNote: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {
			if (err) {
				res.status(500).send(err);
			} else {
				patient.historicalVisitNotes.push(req.body);
				patient.save(function( err, newNote ) {
					if (err) {
						res.status(500).send(err);
					} 
					res.send( newNote );

				})
			}
		})
	},

	addNewGoal: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {
			if (err) {
				res.status(500).send(err);
			} else {
				patient.patientGoals.push(req.body);
				patient.save(function( err, newGoal ) {
					if (err) {
						res.status(500).send(err);
					} 
					res.send( newGoal );

				})
			}
		})

	},

	updatePatientInsuranceInfo: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {

				for ( var property in req.body.changed ) {
					patient.insuranceInfo.id(req.query.insurid).set(property, req.body.changed[property]); 
				}

			patient.save(function( err, updatedPatient ) {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(updatedPatient)

			})
		})	
	},

	updatePatientVisitNotes: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {
			
			for ( var property in req.body.changed ) {
				patient.historicalVisitNotes.id(req.query.noteid).set(property, req.body.changed[property]); 
			}
		
			patient.save(function( err, updatedPatient ) {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(updatedPatient)

			})
		})	
	},

	updatePatientGoals: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {
			
			for ( var property in req.body.changed ) {
				patient.patientGoals.id(req.query.goalid).set(property, req.body.changed[property]); 
			}

			patient.save(function( err, updatedGoals ) {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(updatedGoals)

			})
		})	
	},


};








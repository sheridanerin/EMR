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

	updatePatient: function( req, res ) {
		Patient.findById(req.query.id, function( err, patient ) {
			
			for ( var property in req.body.changed ) {
				if ( patient[property].typeOf !== Object ) {
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

	updatePatientVisitNotes: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {
			
			patient.historicalVisitNotes.id(req.query.notesid, function( err, visitNotes ) {
				for ( var property in req.body.changed ) {
					visitNotes.set(property, req.body.changed[property]);
				}
			})			

			visitNotes.save(function( err, updatedPatient ) {
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

	updatePatientInsuranceInfo: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {
			
			patient.insuranceInfo.id(req.query.notesid, function( err, insuranceInfo ) {
				for ( var property in req.body.changed ) {
					insuranceInfo.set(property, req.body.changed[property]);
				}
			})			

			insuranceInfo.save(function( err, updatedPatient ) {
				if (err) {
					return res.status(500).send(err);
				}
	
				res.send(updatedPatient)

			})
		})	
	},

	updatePatientGoals: function( req, res ) {
		Patient.findById(req.query.patientid, function( err, patient ) {
			
			patient.insuranceInfo.id(req.query.notesid, function( err, goals ) {
				for ( var property in req.body.changed ) {
					goals.set(property, req.body.changed[property]);
				}
			})			

			goals.save(function( err, updatedGoals ) {
				if (err) {
					return res.status(500).send(err);
				}
	
				res.send(updatedGoals)

			})
		})	
	},


};








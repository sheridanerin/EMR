var Patient = require('../models/patient.js');	

//// Add New Patient ////
	addPatient: function( req, res ) {
		new Patient(req.body).save(function( err, data ) {
			if (err) { 
				res.statas(500).send(err);
			} else {
				res.send(data);
			}
		});
	},

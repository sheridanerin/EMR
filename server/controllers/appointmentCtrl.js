var Appointment = require('../models/appointment.js');	

module.exports = {

	addAppointment: function( req, res ) {
		console.log(req.body);
		new Appointment( req.body ).save(function( err, appointment ) {
			if ( err ) { 
				res.status(500).send( err );
			} else {
				res.send( appointment );
			}
		});
	},

	getAppointments: function( req, res ) {
		Appointment.find().populate('patient').exec().then( function( appointment, err ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( appointment );
			}
		});
	},

	getDayAppointments: function( req, res ) {
		Appointment.find({ date: new Date( req.query.day )}, function( err, appointments ) {
			if (err) {
				return res.status(500).send(err);
			}
			
			res.send(appointments);
		})
	},

	getAppointment: function( req, res ) {
		Appointment.findById( req.query.id, function( err, appointment ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( appointment );
			}
		});
	},

	deleteAppointment: function( req, res ) {
		Appointment.findByIdAndRemove( req.query.id, function( err, appointment ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( appointment );
			}
		});
	},

	updateAppointment: function( req, res ) {
		Appointment.findById(req.query.id, function( err, appointment ) {
			
			for ( var property in req.body.changed ) {
				appointment.set(property, req.body.changed[property]);
			}		
			appointment.save(function( err, updatedAppointment ) {
				if (err) {
					return res.status(500).send(err);
				}
	
				res.send(updatedAppointment)

			})
		})	
	}

};

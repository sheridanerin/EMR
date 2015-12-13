var   mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Appointment = Schema({

	  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }
	, description: { type: String, required: true }
	, date: { type: Date, required: true }
	, startTime: { type: Number, required: true }
	, endTime: { type: Number, required: true }
	
});

module.exports = mongoose.model('Appointment', Appointment);
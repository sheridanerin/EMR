var   mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Appointment = Schema({

	  client: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }
	, description: { type: String, required: true }
	, date: { type: Date, required: true }
	, startTime: { type: Date, required: true }
	, endTime: { type: Date, required: true }
	, duration: Number
	
});

module.exports = mongoose.model('Appointment', Appointment);
var   mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Patient = Schema({

	  firstName: { type: String, required: true } 
	, lastName: { type: String, required: true }
	, DOB: { type: Date, required: true }
	, streetAddress: { type: String, required: true }
	, city: { type: String, required: true }
	, State: { type: String, required: true }
	, zip: { type: Number, required: true }
	, phone1: { type: String, required: true }
	, phone2: String
	, email: { type: String, required: true }
	, emergencyFirstName: { type: String, required: true }
	, emergencyLastName: { type: String, required: true }
	, emergencyPhone1: { type: String, required: true }
	, emergencyPhone2: String
	, emergencyEmail: { type: String, required: true }
	, historicalVisitNotes: [{
		  date:  { type: Date, default: new Date(), required: true }
		, description: { type: String, required: true }
		, notes: { type: String, required: true }
	}]
	, insuranceInfo: [{
		  insuranceCompany: { type: String, required: true }
		, planID: { type: String, required: true }
	}]
	, patientGoals: [{
		  status: ["New", "Discontinued", "Hold", "Met", "Ongoing"]
		, shortTermGoal: { type: String, required: true }
		, procedure: { type: String, required: true }
		, startDate: { type: Date, required: true, default: new Date() }
		, endDate: { type: Date, required: true }
		, addressed: Boolean
	}]

});

module.exports = mongoose.model('Patient', Patient);
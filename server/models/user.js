var   mongoose = require('mongoose')
	, bcrypt = require('bcrypt')
	, Schema = mongoose.Schema;

var User = Schema({

	  firstName: {type: String, required: true}
	, lastName: {type: String, required: true}
	, username: {type: String, required: true}
	, password: {type: String, required: true}
	, permissions: {
		  insuranceInfo: Boolean
		, visitNotes: Boolean
		, patientGoals: Boolean
	}

});

module.exports = mongoose.model('User', User);	
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

User.methods.generateHash = function( password ) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

User.methods.validatePassword = function( password ) {
	return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', User);	
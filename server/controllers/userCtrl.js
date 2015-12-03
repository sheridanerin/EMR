var User = require('../models/user.js');	

module.exports = {

	addUser: function( req, res ) {
		new User( req.body ).save(function( err, user ) {
			if ( err ) { 
				res.status(500).send( err );
			} else {
				res.send( user );
			}
		});
	},

	getUsers: function( req, res ) {
		User.find( function( err, users ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( users );
			}
		});
	},

	getUser: function( req, res ) {
		User.findById( req.query.id, function( err, user ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( user );
			}
		});
	},

	deleteUser: function( req, res ) {
		User.findByIdAndRemove( req.query.id, function( err, user ) {
			if ( err ) {
				return console.error( err );
			} else {
				res.send( user );
			}
		});
	},

	updateUser: function( req, res ) {
		User.findById(req.query.id, function( err, user ) {
			
			for ( var property in req.body.changed ) {
				user.set(property, req.body.changed[property]);
			}		
			user.save(function( err, updatedUser ) {
				if (err) {
					return res.status(500).send(err);
				}
	
				res.send(updatedUser)

			})
		})	
	}

};





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
			
			// var updatedUser = nestSetter(req.body.changed, user);
			for ( var property in req.body.changed ) {
				if (typeof user[property] !== 'object') {
					user.set(property, req.body.changed[property]);
				}
			}		
			user.save(function( err, updatedUser ) {
				if (err) {
					return res.status(500).send(err);
				}
	
				res.send(updatedUser)

			})
		})	
	},

	updateUserPermissions: function( req, res ) {
		User.findById(req.query.id, function( err, user ) {

 			for ( var property in req.body.changed ) {
				user.permissions.set(property, req.body.changed[property]); 
			}

			user.save(function( err, updatedPermissions ) {
				if (err) {
					return res.status(500).send(err);
				}
				res.send(updatedPermissions)

			})
		})	
	},

	isAuth: function( req, res, next ) {
		if(req.user) {
			next();
		} else {
			res.status(403).send('Not Allowed');
		}
	},

	auth: function( req, res ) {
		res.send(req.user);
	}

};

// function nestSetter( changed, documentToChange ) {

// 	for (var property in changed) {
		
// 		if (documentToChange.hasOwnProperty(property) && typeof documentToChange[property] === 'object' && !(Array.isArray(documentToChange[property]))) {

// 			documentToChange[property].set(property, nestSetter( changed[property], documentToChange[property] ))

// 		} else if (documentToChange.hasOwnProperty(property) && !(Array.isArray(documentToChange[property]))) {

// 			documentToChange[property].set(property, (changed[property]));

// 		}
// 	}
// 	return documentToChange;
// }




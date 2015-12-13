var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, mongoose = require('mongoose')
	, port = 8000
	, mongoUri = 'mongodb://localhost:27017/'
	, patientCtrl = require('./server/controllers/patientCtrl')
	, userCtrl = require('./server/controllers/userCtrl')
	, appointmentCtrl = require('./server/controllers/appointmentCtrl')
	, session = require('express-session')
	, passport = require('passport')
	, config = require('./server/Config/auth');

require('./server/Config/passport')(passport);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());


	//////////
	// AUTH //
	//////////
app.post('/api/signup', passport.authenticate('local-signup'), function( req, res ) {
	if (!req.user) {
		return res.status(401).send('not allowed');
	}
	res.redirect('/#/admin');
});
app.post('/api/login', passport.authenticate('local-login', { failure: '/#/home' }),
	function( req, res ) {
		res.send(req.user);
	});
app.get('/api/logout', function( req, res ) {
	req.logout();
	req.session.destroy();
	res.redirect('/#/home');
});
app.get('/api/auth', userCtrl.isAuth, userCtrl.auth);
app.get('/api/adminauth', userCtrl.isAdmin, userCtrl.auth);


	/////////////
	// PATIENT //
	/////////////
app.get('/api/patients', patientCtrl.getPatients); //No query needed.
app.get('/api/patient', patientCtrl.getPatient); //Need to provide patient "id" query.
app.post('/api/patient', patientCtrl.addPatient); //No query needed.
app.post('/api/patient/newnote', patientCtrl.addNewNote); //Need to provide patient "id" query.
app.post('/api/patient/newgoal', patientCtrl.addNewGoal); //Need to provide patient "id" query.
app.put('/api/patient/update', patientCtrl.updatePatient); //Need to provide patient "id" query.
app.put('/api/patient/updateinfo', patientCtrl.updatePatientInsuranceInfo); //need to provide "patientid" and "insurid" as querys.
app.put('/api/patient/updatenotes', patientCtrl.updatePatientVisitNotes); //need to provide "patientid" and "noteid" as querys.
app.put('/api/patient/updategoals', patientCtrl.updatePatientGoals); //need to provide "patientid" and "goalid" as querys.


	//////////////
	//// USER ////
	//////////////
app.get('/api/users', userCtrl.getUsers); //No query needed.
app.get('/api/user', userCtrl.getUser); //Need to provide user "id" query.
app.post('/api/user', userCtrl.addUser); //No query needed.
app.delete('/api/user', userCtrl.deleteUser); //Need to provide user "id" query.
app.put('/api/user/update', userCtrl.updateUser); //Need to provide user "id" query.
app.put('/api/user/updateperm', userCtrl.updateUserPermissions); //Need to provide user "id" query.


	/////////////////
	// APPOINTMENT //
	/////////////////
app.get('/api/appointments', appointmentCtrl.getAppointments); //No query needed.
app.get('/api/dayappointments', appointmentCtrl.getDayAppointments); //Need to provide "day" query.
app.get('/api/appointment', appointmentCtrl.getAppointment); //Need to provide user "id" query.
app.post('/api/appointment', appointmentCtrl.addAppointment); //No query needed.
app.put('/api/appointment/update', appointmentCtrl.updateAppointment); //Need to provide user "id" query.
app.delete('/api/appointment', appointmentCtrl.deleteAppointment); //Need to provide user "id" query.


app.listen(port, function() {
	console.log('Listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

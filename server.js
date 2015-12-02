var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, mongoose = require('mongoose')
	, port = 8000
	, mongoUri = 'mongodb://localhost:27017/';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

	/////////////
	// PATIENT //
	/////////////
app.get('/api/patient', patientCtrl.getPatient);
app.post('/api/patient', patientCtrl.addPatient);
app.put('/api/patient/spec', patientCtrl.updatePatient);

	//////////////
	//// USER ////
	//////////////
app.get('/api/user', userCtrl.getUser);
app.post('/api/user', userCtrl.addUser);
app.put('/api/user/spec', userCtrl.updateUser);
app.delete('/api/user', userCtrl.updateUser);

	/////////////////
	// APPOINTMENT //
	/////////////////
app.get('/api/appointment', appointmentCtrl.getAppointment);
app.post('/api/appointment', appointmentCtrl.addAppointment);
app.put('/api/appointment/spec', appointmentCtrl.updateAppointment);
app.delete('/api/appointment', appointmentCtrl.updateAppointment);

app.listen(port, function() {
	console.log('Listening on ' + port);
});
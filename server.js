var   express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, mongoose = require('mongoose')
	, port = 8000
	, mongoUri = 'mongodb://localhost:27017/'
	, patientCtrl = require('./server/controllers/patientCtrl')
	, userCtrl = require('./server/controllers/userCtrl')
	, appointmentCtrl = require('./server/controllers/appointmentCtrl');


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


	/////////////
	// PATIENT //
	/////////////
app.get('/api/patients', patientCtrl.getPatients);
app.get('/api/patient', patientCtrl.getPatient);
app.post('/api/patient', patientCtrl.addPatient);
app.post('/api/patient/newnote', patientCtrl.addNewNote);
app.put('/api/patient/update', patientCtrl.updatePatient);
app.put('/api/patient/updateinfo', patientCtrl.updatePatientInsuranceInfo);
app.put('/api/patient/updatenotes', patientCtrl.updatePatientVisitNotes);
app.put('/api/patient/updategoals', patientCtrl.updatePatientGoals);


	//////////////
	//// USER ////
	//////////////
app.get('/api/users', userCtrl.getUsers);
app.get('/api/user', userCtrl.getUser);
app.post('/api/user', userCtrl.addUser);
app.delete('/api/user', userCtrl.deleteUser);
app.put('/api/user/update', userCtrl.updateUser);


	/////////////////
	// APPOINTMENT //
	/////////////////
app.get('/api/appointments', appointmentCtrl.getAppointments);
app.get('/api/appointment', appointmentCtrl.getAppointment);
app.post('/api/appointment', appointmentCtrl.addAppointment);
app.put('/api/appointment/update', appointmentCtrl.updateAppointment);
app.delete('/api/appointment', appointmentCtrl.deleteAppointment);

app.listen(port, function() {
	console.log('Listening on ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});

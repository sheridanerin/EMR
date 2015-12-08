var   mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var Patient = Schema({

	  firstName: { type: String, required: true } 
	, lastName: { type: String, required: true }
	, birthDay: { type: Number, required: true }
	, birthMonth: { type: String, required: true }
	, birthYear: { type: Number, required: true }
	, gender: { type: String, require: true}
	, ifSepLivesWith: { type: String }
	, ifSepBillAddress: { type: String }
	, parent1FirstName: { type: String, required: true } 
	, parent1LastName: { type: String, required: true }
	, parent1StreetAddress: { type: String, required: true }
	, parent1StreetAddress2: { type: String, required: true }
	, parent1City: { type: String, required: true }
	, parent1State: { type: String, required: true }
	, parent1Zip: { type: Number, required: true }
	, parent1Phone1: { type: String, required: true }
	, parent1Phone2: String
	, parent1Email: { type: String, required: true }	
	, parent2FirstName: { type: String } 
	, parent2LastName: { type: String }	
	, parent2StreetAddress: { type: String }
	, parent2StreetAddress2: { type: String }
	, parent2City: { type: String }
	, parent2State: { type: String }
	, parent2Zip: { type: Number }
	, parent2Phone1: { type: String }
	, parent2Phone2: String
	, parent2Email: { type: String }	
	, emergencyFirstName: { type: String }
	, emergencyLastName: { type: String }
	, emergencyPhone1: { type: String }
	, emergencyPhone2: String
	, emergencyEmail: { type: String }
	, conditions: {
		  seasonalAllergies: Boolean	
		, anemia: Boolean				
		, tensionHeadaches: Boolean	
		, osteoarthritis: Boolean		
		, asthma: Boolean		
		, positiveTBTest: Boolean		
		, GIBleed: Boolean			
		, anxiety: Boolean 		
		, emphsemaCOPD: Boolean		
		, atrialFibrillation: Boolean
		, migraines: Boolean
		, rheumatoidArthritis: Boolean
		, ADDADHD: Boolean
		, GERD: Boolean
		, acne: Boolean
		, depression: Boolean
		, glaucoma: Boolean
		, cataracts: Boolean
		, gout: Boolean
		, diabetes: Boolean
		, eczema: Boolean
		, psoriasis: Boolean
		, hearlingLoss: Boolean
		, seizureDisorder: Boolean
		, hypothyroidism: Boolean
		, hyperthyroidism: Boolean	
		, visionLoss: Boolean
		, other: {
			  checked: Boolean
			, condition: String
		}
	}
	, historicalVisitNotes: [{
		  date:  { type: Date, default: new Date(), required: true }
		, description: { type: String, required: true }
		, notes: { type: String, required: true }
	}]
	, insuranceInfo: [{
		  insuranceCompany: { type: String }
		, groupID: { type: String }
		, nameOfInsured: { type: String }
		, relToPatient: { type: String }
		, streetAddress: { type: String }
		, city: { type: String }
		, state: { type: String }
		, zip: { type: Number }
		, email: { type: String }
		, phone1: { type: Number }
		, phone2: { type: Number }
		, birthDay: { type: Number }
		, birthMonth: { type: String }
		, birthYear: { type: Number }
		, zip: { type: Number }
}
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
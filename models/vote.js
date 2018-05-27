const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VotingSchema = new Schema({
	answer: {
		type: String,
		required: true
	},
	points: {
		type: String, 
		required: true
	}
});

//Create collection and add the schema 
const Vote1 = mongoose.model('Vote1', VotingSchema);

module.exports = Vote1;
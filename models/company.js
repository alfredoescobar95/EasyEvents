'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = Schema({
		name: String,
		address: String,
		telephone: Integer,
		email: String,
		img: String,
		services: String,
		description: String
});

module.exports = mongoose.model('Company', CompanySchema);
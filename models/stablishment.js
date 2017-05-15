'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StablishmentsSchema = Schema({
		name: String,
		address: String,
		telephone: Integer,
		email: String,
		img: String,
		services: String,
		description: String,
		price: Double
});

module.exports = mongoose.model('Stablishments', StablishmentsSchema);
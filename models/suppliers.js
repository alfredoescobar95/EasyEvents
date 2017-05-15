'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SuppliersSchema = Schema({
		name: String,
		address: String,
		telephone: Integer,
		email: String,
		img: String,
		products: String,
		description: String,
		price: Double
});

module.exports = mongoose.model('Suppliers', SuppliersSchema);
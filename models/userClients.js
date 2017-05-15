'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserClientsSchema = Schema({
		name: String,
		surname: String,
		email: String,
		password: String,
		img: String,
		business_name: String,
		id_suppliers: { type: Schema.ObjectId, ref: 'Suppliers'}
		id_companys: { type: Schema.ObjectId, ref: 'Companys'}
		id_stablishements: { type: Schema.ObjectId, ref: 'Stablishements'}
		id_consumers: { type: Schema.ObjectId, ref: 'UserClientsClients'}
		id_events: { type: Schema.ObjectId, ref: 'Events'}
});

module.exports = mongoose.model('UserClients', UserClientsSchema);
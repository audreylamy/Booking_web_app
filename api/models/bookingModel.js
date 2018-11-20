'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    roomName: { type: String, required: true },
    date: { type: String, required: true },
    hour: { type: String, required: true },
    createdAt:{ type: Date }
});

module.exports = mongoose.model('Books', BookingSchema);
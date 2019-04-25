const mongoose = require('../db/connection.js');
const Cake = require('Cake')
const Order = mongoose.Schema({
    cake: Cake,
    quantity: Number,
    status: String,
    pickUp: Date,
    comments: String,
});

module.exports = mongoose.model('Order', Order)
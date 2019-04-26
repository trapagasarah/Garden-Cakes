const mongoose = require('../db/connection.js');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Order = mongoose.Schema({
    cakeId: {type: ObjectId, ref : 'Cake'},
    quantity: Number,
    status: String,
    pickUp: Date,
    comments: String,
});

module.exports = mongoose.model('Order', Order)
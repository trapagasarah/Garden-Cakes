const mongoose = require('../db/connection.js');

const Review = mongoose.Schema({
    customerName: String,
    rating: Number,
    explanation: String, 
})

const Cake = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    reviews: [Review],
});

module.exports = mongoose.model('Cake', Cake)
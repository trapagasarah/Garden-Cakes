const mongoose = require('../db/connection.js');


const Cake = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
});


module.exports = mongoose.model('Cake', Cake)
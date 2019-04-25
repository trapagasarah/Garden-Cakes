const mongoose = require('../db/connection.js')

const Suggestion = mongoose.Schema({
    customerName: String,
    idea: String,
});

module.exports = mongoose.model('Suggestion', Suggestion)
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/Garden-Cakes';
mongoose.connect(connectionString, {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to MongoDB');
    });

module.exports = mongoose;
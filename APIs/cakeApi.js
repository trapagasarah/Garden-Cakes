const CakeCollection = require('../models/Cake')

function getAllCakes(){
    return CakeCollection.find()
        
}
 module.exports = {
     getAllCakes,
 }
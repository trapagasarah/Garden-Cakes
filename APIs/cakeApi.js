const CakeCollection = require('../models/Cake')

function getAllCakes(){
    return CakeCollection.find()    
}
function getCakeById(cakeId){
    return CakeCollection.findById(cakeId)
}
function createNewCake(cake){
    return CakeCollection.create(cake)
}
 module.exports = {
     getAllCakes,
     getCakeById,
     createNewCake
 }
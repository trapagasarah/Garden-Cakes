const CakeCollection = require('../models/Cake')

function getAllCakes(){
    return CakeCollection.find()    
}
function getCakeById(cakeId){
    return CakeCollection.findById(cakeId)
}

 module.exports = {
     getAllCakes,
     getCakeById,
 }
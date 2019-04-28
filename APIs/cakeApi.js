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
function updateCakeById(cakeId, cake){
    return  CakeCollection.updateOne({
        _id: cakeId
    }, cake)
}
function deleteCakeById(cakeId){
    return CakeCollection.deleteOne({ _id: cakeId})
}


 module.exports = {
     getAllCakes,
     getCakeById,
     createNewCake,
     updateCakeById,
     deleteCakeById,
     
 }
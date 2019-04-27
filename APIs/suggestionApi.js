const SuggestionCollection = require('../models/Suggestion');

function getAllSuggestions(){
    return SuggestionCollection.find()
}
function createNewSuggestion(suggestion){
    return SuggestionCollection.create(suggestion)
}
function deleteSuggestionById(suggestionId){
    return SuggestionCollection.deleteOne({
        _id: suggestionId
    })
}
module.exports = {
    getAllSuggestions,
    createNewSuggestion,
    deleteSuggestionById
}

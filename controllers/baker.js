const cakeApi = require('../APIs/cakeApi');
const orderApi = require('../APIs/orderApi');
const suggestionApi = require('../APIs/suggestionApi');
 
const bakerCakeView = function(req, res){
    cakeApi.getAllCakes()
    .then((cakes) => suggestionApi.getAllSuggestions()
        .then((suggestions) => res.render('baker/cakeList', { cakes, suggestions }))
    )
}
const bakerController = {
    makeCake: function (req, res) {
        cakeApi.createNewCake(req.body)
            .then(() => bakerCakeView(req, res))
    },
    viewBakerPage: bakerCakeView,

    deleteSuggestion: function (req, res) {
        suggestionApi.deleteSuggestionById(req.params.id)
            .then(() => bakerCakeView(req, res))
    },

    viewCakeUpdatePage: function (req, res) {
        cakeApi.getCakeById(req.params.id)
            .then((cake) => res.render('baker/updateCake', { cake }))
    },
    deleteCake: function (req, res) {
        cakeApi.deleteCakeById(req.params.id)
            .then(() => bakerCakeView(req, res))
    },
    updateCake: function (req, res) {
        cakeApi.updateCakeById(req.params.id, req.body)
            .then(() => bakerCakeView(req, res))
    },
    viewActiveOrders: function (req, res) {
        orderApi.getSubmittedOrders()
            .then((orders) => res.render('baker/bakerOrders', { orders }))
    },
    updateOrder: function (req, res) {
        orderApi.updateOrderById(req.params.id, req.body)
            .then(() => orderApi.getSubmittedOrders())
            .then((orders) => res.render('baker/bakerOrders', { orders }))
    },
    deletePickedUpOrders: function (req, res) {
        orderApi.deleteOrderById(req.params.id)
            .then(() => orderApi.getSubmittedOrders())
            .then((orders) => res.render('baker/bakerOrders', { orders }))
    },
}

module.exports = bakerController
const cakeApi = require('../APIs/cakeApi');
const orderApi = require('../APIs/orderApi');

const bakerController = {
    makeCake: function (req, res) {
        cakeApi.createNewCake(req.body)
            .then(() => cakeApi.getAllCakes())
            .then((cakes) => res.render('baker/cakeList', { cakes }))
    },
    viewBakerPage: function (req, res) {
        cakeApi.getAllCakes()
            .then((cakes) => res.render('baker/cakeList', { cakes }))
    },

    viewCakeUpdatePage: function (req, res) {
        cakeApi.getCakeById(req.params.id)
        .then((cake) => res.render('baker/updateCake', { cake }))
    },
    deleteCake: function (req, res) {
        cakeApi.deleteCakeById(req.params.id)
            .then(() => cakeApi.getAllCakes())
            .then((cakes) => res.render('baker/cakeList', { cakes }))
    },
    updateCake: function (req, res) {
        cakeApi.updateCakeById(req.params.id, req.body)
            .then(() => cakeApi.getAllCakes())
            .then((cakes) => res.render('baker/cakeList', { cakes }))
    }
}

module.exports = bakerController
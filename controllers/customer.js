const cakeApi = require('../APIs/cakeApi');

const customerController = {
    index: function(req, res){
        cakeApi.getAllCakes()
            .then((cakes) => res.render('customer/index', {cakes}))
    },
    show: function(req, res){
        cakeApi.getCakeById(req.params.id)
            .then((cake) => res.render('customer/cake', {cake}))
    }
}

module.exports = customerController

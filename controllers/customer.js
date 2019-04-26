const cakeApi = require('../APIs/cakeApi');
const orderApi = require('../APIs/orderApi');
const customerController = {
    index: function(req, res){
        cakeApi.getAllCakes()
            .then((cakes) => res.render('customer/index', {cakes}))
    },
    show: function(req, res){
        cakeApi.getCakeById(req.params.id)
            .then((cake) => res.render('customer/cake', {cake}))
    },
    addToCart: function(req, res){
        orderApi.createNewOrder(req.body)
            .then(() => orderApi.getShoppingCart())
            .then((orders) => res.render('customer/shoppingCart', {orders}))
    }
}

module.exports = customerController

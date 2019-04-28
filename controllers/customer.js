const cakeApi = require('../APIs/cakeApi');
const orderApi = require('../APIs/orderApi');
const suggestionApi = require('../APIs/suggestionApi');

function goToShoppingCart (req, res) {
    orderApi.getShoppingCart()
            .then((orders) => {
                const sum = orders.map(order => order.cakeId)
                .filter(cake => cake != null)
                .map(cake => cake.price)
                .reduce((total, value) => total + value)
                res.render('customer/shoppingCart', { orders, sum })
            })
}

const customerController = {
    index: function (req, res) {
        cakeApi.getAllCakes()
            .then((cakes) => res.render('customer/index', { cakes }))
    },
    show: function (req, res) {
        cakeApi.getCakeById(req.params.id)
            .then((cake) => res.render('customer/cake', { cake }))
    },
    addToCart: function (req, res) {
        orderApi.createNewOrder(req.body)
            .then(() => goToShoppingCart(req, res))
    },
    updateCart: function (req, res) {
        orderApi.updateOrderById(req.params.id, req.body)
            .then(() => goToShoppingCart(req, res))
    },
    deleteFromCart: function (req, res) {
        orderApi.deleteOrderById(req.params.id)
            .then(() => goToShoppingCart(req, res))
    },
    submitOrders: function (req, res) {
        orderApi.moveShoppingCartItemsToProcessing()
            .then(() => orderApi.getSubmittedOrders())
            .then((orders) => res.render('customer/orders', { orders }))
    },
    viewShoppingCart: function (req, res) {
        goToShoppingCart(req, res)
    },
    viewOrders: function (req, res) {
        orderApi.getSubmittedOrders()
            .then((orders) => res.render('customer/orders', { orders }))
    },
    makeASuggestion: function (req, res) {
        suggestionApi.createNewSuggestion(req.body)
        .then(() => cakeApi.getAllCakes())
        .then((cakes) => res.render('customer/index', {cakes}))
    },
}

module.exports = customerController

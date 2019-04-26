const OrderCollection = require('../models/Order');

function createNewOrder(order) {
    return OrderCollection.create(order)
}
function getShoppingCart() {
    return OrderCollection.find({ status: 'Cart' }).populate('cakeId')
}


module.exports = {
    createNewOrder,
    getShoppingCart
}
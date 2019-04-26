const OrderCollection = require('../models/Order');

function createNewOrder(order) {
    return OrderCollection.create(order)
}
function getShoppingCart() {
    return OrderCollection.find({ status: 'Cart' }).populate('cakeId')
}
function updateOrderById(orderId, order){
    return OrderCollection.updateOne({
        _id: orderId
    }, order)
}
function deleteOrderById(orderId){
    return OrderCollection.deleteOne({id: _orderId})
}

module.exports = {
    createNewOrder,
    getShoppingCart,
    updateOrderById,
    deleteOrderById
}
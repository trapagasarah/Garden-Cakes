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
function moveShoppingCartItemsToProcessing() {
    return OrderCollection.updateMany({status: 'Cart'},{status: 'Processing'})
}
function deleteOrderById(orderId){
    return OrderCollection.deleteOne({_id: orderId})
}
function getSubmittedOrders(){
    return OrderCollection.find({ status: {$in:['Processing', 'Baking', 'Completed']} }).populate('cakeId')
}

module.exports = {
    createNewOrder,
    getShoppingCart,
    updateOrderById,
    deleteOrderById,
    getSubmittedOrders,
    moveShoppingCartItemsToProcessing

}
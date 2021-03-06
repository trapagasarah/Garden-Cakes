let express = require('express')
let router = express.Router()
const customerController = require('../controllers/customer')

router.get('/', customerController.index)
router.get('/cakes/:id', customerController.show)
router.post('/shoppingCart', customerController.addToCart)
router.put('/shoppingCart/:id',customerController.updateCart)
router.delete('/shoppingCart/:id',customerController.deleteFromCart)
router.post('/shoppingCart/submit', customerController.submitOrders)
router.get('/shoppingCart', customerController.viewShoppingCart)
router.get('/orders', customerController.viewOrders)
router.post('/',customerController.makeASuggestion)
module.exports = router
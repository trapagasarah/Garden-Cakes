let express = require('express')
let router = express.Router()
const customerController = require('../controllers/customer')

router.get('/', customerController.index)
router.get('/cakes/:id', customerController.show)
router.post('/shoppingCart', customerController.addToCart)
router.put('/shoppingCart/:id',customerController.updateCart)
router.delete('/shoppingCart/:id',customerController.deleteFromCart)
module.exports = router
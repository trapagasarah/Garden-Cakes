let express = require('express')
let router = express.Router()
const customerController = require('../controllers/customer')

router.get('/', customerController.index)
router.get('/cakes/:id', customerController.show)
router.post('/shoppingCart', customerController.addToCart)

module.exports = router
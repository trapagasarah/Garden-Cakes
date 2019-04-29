let express = require('express');
let router = express.Router()
const bakerController = require('../controllers/baker')

router.get('/cakes', bakerController.viewBakerPage)
router.post('/cakes', bakerController.makeCake)
router.put('/cakes/:id', bakerController.updateCake)
router.delete('/cakes/:id', bakerController.deleteCake)
router.delete('/cakes/suggestions/:id', bakerController.deleteSuggestion)

router.get('/cakes/update/:id', bakerController.viewCakeUpdatePage)

router.get('/orders', bakerController.viewActiveOrders)
router.put('/orders/:id', bakerController.updateOrder)
router.delete('/orders/:id', bakerController.deletePickedUpOrders)
module.exports = router

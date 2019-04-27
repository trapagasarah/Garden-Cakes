let express = require('express');
let router = express.Router()
const bakerController = require('../controllers/baker')

router.get('/cakes', bakerController.viewBakerPage)
router.post('/cakes', bakerController.makeCake)
router.put('/cakes/:id', bakerController.updateCake)
router.delete('/cakes/:id', bakerController.deleteCake)
router.get('/cakes/update/:id', bakerController.viewCakeUpdatePage)



module.exports = router

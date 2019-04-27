let express = require('express');
let router = express.Router()
const bakerController = require('../controllers/baker')

router.get('/cakes', bakerController.viewCakeEditPage)
router.post('/cakes', bakerController.makeCake)

module.exports = router

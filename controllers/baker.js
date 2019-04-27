const cakeApi = require('../APIs/cakeApi');
const orderApi = require('../APIs/orderApi');

const bakerController = {
    makeCake: function(req, res){
        cakeApi.createNewCake(req.body)
        .then(() => cakeApi.getAllCakes())
        .then((cakes) => res.render('baker/cakeEdit', { cakes }))
    },
    viewCakeEditPage: function(req, res){
        cakeApi.getAllCakes()
        .then ((cakes) =>  res.render('baker/cakeEdit', { cakes }))
    }
}

module.exports = bakerController
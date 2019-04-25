const cakeApi = require('../APIs/cakeApi');

const customerController = {
    index: function(req, res){
        cakeApi.getAllCakes()
            .then( cakes => res.send(cakes))
    }
}

module.exports = customerController
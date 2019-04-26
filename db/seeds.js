const Cake = require('../models/Cake')
const Order = require('../models/Order')
let newCakes = [
    {
        name: 'Butterfly Garden',
        price: 90,
        image: '',
        description: "This lovely cake is 6in wide and has three layers. It has a vanilla sponge and a rosewater buttercream icing, and is covered in a beautiful array of flowers and dainty butterflies. It is the perfect cake for a tea party or a very femminine friend's birthday. The flavors are very subtle, which gives it a very light and airy feel.",
        reviews: [{
            rating: 4,
            customerName: 'Tiger Lily',
            explanation: 'djkdtkfylufdtydtykxtyrxktyx'
        }]
    },
    {
        name: 'Fall Trees',
        price: 115,
        image: '',
        description: 'This beautiful cake is inspired by the amazing autumn leaves. It is 6in wide and three layers tall. It has a almond/lemon sponge with a cinnamon buttercream. The cake is topped with a wonderful assortment of flowers in the colors of fall leaves, and the sides of the cake are covered with almonds creating the look of bark on a tree. This is a perfect cake for all those nature lovers out there, especially those who love the fall months.',
        reviews: []
    },
    {
        name: 'Dirt Mountain',
        price: 150,
        image: '',
        description:'This gargantuan cake is three layers and 8in in diameter. The best and only way to describe this cake is CHOCOLATE, CHOCOLATE, CHOCOLATE!!! If you are a chocolate lover, you have found the cake for you, its got a chocolate sponge, chocolate buttercream AND chocolate syrup topped with caramel popcorn for a little salty sweet touch. Just be careful not to chocolate overdose!',
        reviews: []   
    }
]
Order.deleteMany().then(() => {
    console.log('Deleted orders')
})
Cake.deleteMany().then(() => {
    console.log('Deleted cakes')
})
Cake.create(newCakes).then(cakes => {
    console.log('Saved cakes', cakes)
})
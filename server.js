const express = require('express');
const app = express();
const methodOverride = require('method-override');
const customerRoutes = require('./routes/customerRoutes')
const bakerRoutes = require('./routes/bakerRoutes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use('/', customerRoutes);
app.use('/baker', bakerRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Connected at: ' + PORT)
})



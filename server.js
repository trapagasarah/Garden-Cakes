const express = require('express');
const app = express();
const methodOverride = require('method-override');
const customerRoutes = require('./routes/customerRoutes')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use('/', customerRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Connected at: ' + PORT)
})



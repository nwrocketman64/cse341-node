// Import the needed Libraries.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Create the web app.
const app = express();

// Set render
app.set('view engine', 'ejs');
app.set('views', 'views');

// A list for storing the items.
const products = [];

// Make the public folder open.
app.use(express.static(path.join(__dirname, 'public')));

// Use the encoder.
app.use(bodyParser.urlencoded({extended: false}));

// Follow the routing for the web app.
// The default page.
app.get('/', (req, res, next) => {
    // Deliver the product view and include the list of products.
    res.render('products', {products: products});
});

// Add the product to the list from the default page.
app.post('/add-product', (req, res, next) => {
    // Add the product to the list/
    products.push({ title: req.body.title, descript: req.body.descript, price: req.body.price });
    
    // Then redirect the user back to main page.
    res.redirect('/');
});

// Deliver the 404 page if no other options work.
app.use((req, res, next) => {
    res.status(404).render('404');
});

// Have the app listen on port 3000.
console.log('Listening on port 3000');
app.listen(3000);
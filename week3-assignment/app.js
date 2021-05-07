// Import the needed Libraries.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Import the error controller
const errorController = require('./controllers/error');

// Import the routes.
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Create the web app.
const app = express();
const PORT = process.env.PORT || 5000

// Set render engine.
app.set('view engine', 'ejs');
app.set('views', 'views');

// Make the public folder open.
app.use(express.static(path.join(__dirname, 'public')));

// Use the encoder.
app.use(bodyParser.urlencoded({extended: false}));

// Follow the routing for the web app.
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Deliver the 404 page if no other options work.
app.use(errorController.get404);

// Have the app listen on current port.
console.log('Listening on port ' + PORT);
app.listen(PORT);
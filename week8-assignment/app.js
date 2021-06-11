// Import the needed Libraries.
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Create the web app.
const app = express();
const PORT = process.env.PORT || 5000

// Set render
app.set('view engine', 'ejs');
app.set('views', 'views');

// Make the public folder open.
app.use(express.static(path.join(__dirname, 'public')));

// Use the encoder.
app.use(bodyParser.urlencoded({extended: false}));

// Follow the routing for the web app.
const route = require('./routes/pr08');
app.use(route);

// Have the app listen on port 3000.
console.log('Listening on port 5000');
app.listen(PORT);
// Import the needed libraries.
const express = require('express');
const bodyParser = require('body-parser');

// Import the controller.
const routes = require('./routes');

// Create the server.
const app = express();
const PORT = process.env.PORT || 5000;

// Configure the server's rendering engine to ejs.
app.set('view engine', 'ejs');

// Declair the public folder as a static folder.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Set the route to the home page.
app.use(routes);

// Have the app listen on port 5000.
console.log('Listening on port 5000');
app.listen(PORT);
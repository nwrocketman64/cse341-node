// Import the needed libraries.
const express = require('express');

// Import the controller.
const controller = require('./controller/pokemon')

// Create the server.
const app = express();
const PORT = process.env.PORT || 5000;

// Configure the server's rendering engine to ejs.
app.set('view engine', 'ejs');

// Declair the public folder as a static folder.
app.use(express.static(__dirname + '/public'));

// Set the route to the home page.
app.get('/', (req, res, next) => {
    res.render('welcomePage');
});

app.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
            res.render('pokemon', {
                pokemonList: pokemon,
                page: page
            });
    });
});

// Have the app listen on port 5000.
console.log('Listening on port 5000');
app.listen(PORT);
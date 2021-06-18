// Get the node fetch library to make HTTP requests.
const fetch = require('node-fetch');

// The function gets the needed data from the api.
exports.getPokemon = (offset, callback) => {
    // fetch data from the api.
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        // Convert the response from json to an object.
        .then(response => response.json())
        // Return the data.
        .then(data => {
            callback(data.results);
        });
};
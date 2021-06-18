// Import the pokemonModel.
const model = require('../model/pokeModel');

// Gather the needed data from the model and return the correct data.
exports.getPokemon = (pageNum, callback) => {
    // Page 1 will have an offset of 0
    const offset = 10 * (pageNum - 1);
    model.getPokemon(offset, (data) => {
        callback(data);
    });
};
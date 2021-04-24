// Get the http library to create the server.
const http = require('http');

// Import prove01-routes.js
const routes = require('./prove01-routes');

// Create an instant of the server.
const server = http.createServer(routes);

// Have the server listen on port 3000.
server.listen(3000);
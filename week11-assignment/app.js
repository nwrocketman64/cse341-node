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
const server = app.listen(PORT);

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Client connected');

    socket.on('new-name', () => {
        // Someone added a name! Tell everyone else to update the list.
        socket.broadcast.emit('update-list');
    });
});
// Import the file system library.
const fs = require('fs');
const readline = require('readline');

// The main routing function.
const mainHandler = (req, res) => {
    // Get the url and the input method from the page.
    const url = req.url;
    const method = req.method;

    // Set the header for the return data.
    res.setHeader('Content-Type', 'text/html');

    // Route to the correct page based on the url.
    // The defaul response if the url doesn't match.
    if (url === '/') {
        // Return this response.
        res.write('<html>');
        res.write('<head><title>Greetings</title><head>');
        res.write('<body>');
        res.write('<h1>Greetings</h1>');
        res.write('<p>');
        res.write('Hello, welcome to my website!');
        res.write('<form action="/create-user" method="POST"><label>Enter a new user: </label><input type="text" name="user"><button type="submit">Send</button></form>');
        res.write('</p>');
        res.write('</body');
        res.write('</html>');
        return res.end();
    }

    // If the url ends in users.
    if (url === '/users') {
        // Create an object to store the list of users in html.
        let usersHTML = '';

        // Create an object to read the file.
        const readInterface = readline.createInterface({
            input: fs.createReadStream('users.txt'),
            output: process.stdout,
            console: false
        });
        
        // The function reads a line from the file.
        readInterface.on('line', (line) => {
            usersHTML += '<li>' + line + '</li>';
            console.log(line);
        });

        readInterface.on('close', () => {
            // Return this response.
            res.write('<html>');
            res.write('<head><title>The List of Users</title><head>');
            res.write('<body>');
            res.write('<h1>The List of Users</h1>');
            res.write('<ul>');
            res.write(usersHTML);
            res.write('</ul>');
            res.write('</body');
            res.write('</html>');
            return res.end();
        });
    }

    // To add a new user.
    if (url === '/create-user' && method === 'POST'){
        // Add a new user.
        // Create the body to store the incoming data.
        const body = [];

        // When there are incoming chunks, add them to the body.
        req.on('data', chunk => {
            body.push(chunk);
        });

        // When the data is fully upload, return the data.
        return req.on('end', () => {
            // Concatnate and then convert the buffer to string.
            const parsedBody = Buffer.concat(body).toString() + '\r\n';

            // Remove the key value.
            const user = parsedBody.split('=')[1];

            // Print the user name to console.
            console.log(user);

            // Write the user to file
            fs.appendFile('users.txt', user, err => {
                // Return Status code and re-route the user.
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                return res.end();
            });
        });
    }
};

// Export the mainHandler.
module.exports = mainHandler;
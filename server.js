// Import necessary core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Determine the requested route
    const route = req.url;

    // Serve the appropriate HTML file based on the route
    let filePath;
    switch (route) {
        case '/':
            // For the root route, serve index.html
            filePath = path.join(__dirname, 'index.html');
            break;
        case '/about':
            // For the /about route, serve about.html
            filePath = path.join(__dirname, 'about.html');
            break;
        case '/contact':
            // For the /contact route, serve contact.html
            filePath = path.join(__dirname, 'contact.html');
            break;
        case '/products':
            // For the /products route, serve products.html
            filePath = path.join(__dirname, 'products.html');
            break;
        case '/subscribe':
            // For the /subscribe route, serve subscribe.html
            filePath = path.join(__dirname, 'subscribe.html');
            break;
        case '/login':
            // For the /login route, implement a redirect to a login page (login.html)
            res.writeHead(301, { 'Location': '/login.html' });
            res.end();
            return; // Exit early after redirecting
        case '/status':
            // For the /status route, implement a custom status code and message
            res.writeHead(709, { 'Content-Type': 'text/plain' });
            res.end("Hey Peter!");
            console.log('Status: 709 Hey Peter!');
            return; // Exit early after sending the status response
        case '/checkout':
            // For the /checkout route, serve checkout.html
            filePath = path.join(__dirname, 'checkout.html');
            break;
        case '/cart':
            // For the /cart route, serve cart.html
            filePath = path.join(__dirname, 'cart.html');
            break;
        default:
            // Handle unknown routes with a 404 Not Found response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return; // Exit early
    }

    // Read the HTML file and serve it
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file read error
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
        } else {
            // Serve the HTML content
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Routes:');
    console.log('- / (Root)');
    console.log('- /about');
    console.log('- /contact');
    console.log('- /products');
    console.log('- /subscribe');
    console.log('- /login (Redirect)');
    console.log('- /status (709 Hey Peter!)');
    console.log('- /checkout');
    console.log('- /cart');
});

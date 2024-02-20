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
            filePath = path.join(__dirname, 'views', 'index.html');
            break;
        case '/about':
            // For the /about route, serve about.html
            filePath = path.join(__dirname, 'views', 'about.html');
            break;
        case '/contact':
            // For the /contact route, serve contact.html
            filePath = path.join(__dirname, 'views', 'contact.html');
            break;
        case '/products':
            // For the /products route, serve products.html
            filePath = path.join(__dirname, 'views', 'products.html');
            break;
        case '/subscribe':
            // For the /subscribe route, serve subscribe.html
            filePath = path.join(__dirname, 'views', 'subscribe.html');
            break;
            
        case '/status':
            // For the /status route, implement a custom status code and message
            res.writeHead(709, { 'Content-Type': 'text/plain' });
            res.end("Hey Peter!");
            console.log('Status: 709 Hey Peter!'); // Event emitter for custom status code access
            return; // Exit early after sending the status response
        case '/checkout':
            // For the /checkout route, serve checkout.html
            filePath = path.join(__dirname, 'views', 'checkout.html');
            break;
        case '/cart':
            // For the /cart route, serve cart.html
            filePath = path.join(__dirname, 'views', 'cart.html');
            break;
        default:
            // Handle unknown routes with a 404 Not Found response
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            console.log(`Event: Unknown Route Access - ${route}`); // Event emitter for unknown route access
            return; // Exit early
    }

    // Read the HTML file and serve it
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file read error
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            console.log(`Error: File Read Failed - ${filePath}`); // Event emitter for file read error
        } else {
            // Serve the HTML content
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
            console.log(`Event: File Read Success - ${filePath}`); // Event emitter for successful file read
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
    console.log('Event: Server Start'); // Event emitter for server start
});

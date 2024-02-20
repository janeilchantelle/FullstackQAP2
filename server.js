// Import necessary core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to write events to disk files
function writeEventToLogFile(eventMessage) {
    const currentDate = new Date();
    const logFileName = `log_${currentDate.toISOString().slice(0, 10)}.txt`;
    const logFilePath = path.join(__dirname, 'logs', logFileName);
    const logEntry = `[${currentDate.toISOString()}] ${eventMessage}\n`;

    // Create logs directory if it doesn't exist
    const logsDirectory = path.join(__dirname, 'logs');
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error(`Error writing to log file ${logFilePath}: ${err}`);
        }
    });
}

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
            const statusEventMessage = 'Status: 709 Hey Peter!';
            console.log(statusEventMessage); // Event emitter for custom status code access
            writeEventToLogFile(statusEventMessage); // Write event to log file
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
            const unknownRouteEventMessage = `Event: Unknown Route Access - ${route}`;
            console.log(unknownRouteEventMessage); // Event emitter for unknown route access
            writeEventToLogFile(unknownRouteEventMessage); // Write event to log file
            return; // Exit early
    }

    // Read the HTML file and serve it
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file read error
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            const fileReadErrorMessage = `Error: File Read Failed - ${filePath}`;
            console.error(fileReadErrorMessage);
            writeEventToLogFile(fileReadErrorMessage); // Write event to log file
        } else {
            // Serve the HTML content
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
            const fileReadSuccessMessage = `Event: File Read Success - ${filePath}`;
            console.log(fileReadSuccessMessage); // Event emitter for successful file read
            writeEventToLogFile(fileReadSuccessMessage); // Write event to log file
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
    const serverStartEventMessage = 'Event: Server Start';
    console.log(serverStartEventMessage); // Event emitter for server start
    writeEventToLogFile(serverStartEventMessage); // Write event to log file
});

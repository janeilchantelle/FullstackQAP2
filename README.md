Web Server with Multi-route Functionality and Event Logging

Description

This project involves the creation of a web server with multi-route functionality and event logging. The server is capable of handling various routes such as the root route, about page, contact page, product listings, subscription page, checkout, and shopping cart. Each route serves a corresponding HTML file to the client upon request.

Additionally, the server implements event logging to capture and handle different events that occur during its operation. Events include server start, custom status code access, successful file reads, and unknown route access. These events are logged to disk files with timestamps, allowing system administrators to monitor the server's behaviour, identify errors, and track user interactions.

Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running npm install.
4. Start the server by running npm start.
Usage

Once the server is running, you can access different routes by navigating to the following URLs:

Root: http://localhost:3000/
About: http://localhost:3000/about
Contact: http://localhost:3000/contact
Products: http://localhost:3000/products
Subscribe: http://localhost:3000/subscribe
Checkout: http://localhost:3000/checkout
Cart: http://localhost:3000/cart
Events Scenario Description: Web Server Event Logging

In this scenario, the server implements event logging to capture and handle various events during its operation:

Server Start Event: Indicates successful initialization of the server.
Custom Status Code Access Event: Logs access to the /status route and the response sent to the client.
File Read Success Event: Logs successful reading and serving of HTML files to clients.
Unknown Route Access Event: Logs access to unknown routes, helping identify potential issues with route handling.
Logging Process Documentation

Events are captured using event emitters within the server code and logged to disk files with timestamps. Each log file is named based on the date (e.g., log_2024-02-20.txt) and stored in the logs directory. System administrators can access and review these log files to monitor server behaviour and diagnose issues.

User Story 1: Enhanced Event Logging
As a system administrator, I want to enhance event logging functionality to include error handling and logging to disk files.

Description:

Error handling mechanisms will be introduced to gracefully handle issues such as disk space limitations or file system errors encountered during logging. Additionally, events will be logged to disk files with timestamps for archival and review purposes. These enhancements ensure that the event logging system remains operational and informative in various scenarios.

User Story 3: Simple Menu System
As a user, I want a simple menu displayed on every web page so I can easily access all the different routes.

Description:

To enhance user experience and navigation within the web application, a simple menu system will be implemented across all web pages. This menu will provide users with easy access to all available routes within the application, allowing for seamless navigation between different sections. 


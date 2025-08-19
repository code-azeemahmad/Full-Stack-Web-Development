// Import the http module
const http = require('node:http');      // don't know who made the method but i use it

const hostname = '127.0.0.1';   // localhost
const port = 3000;              // port number

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // success response
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello World\n'); // response text
});

// Start listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs
// to learn more

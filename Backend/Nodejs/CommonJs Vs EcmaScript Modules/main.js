// Two ways to make modules in node js:
//   --> Ecma Script ES6
//   --> Common Js

// const http = require('node:http');  
import http from "http";

const hostname = '127.0.0.1';   // localhost
const port = 3000;             

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); 
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs
// to learn more

// const fs = require('fs');       // require --> import modules but in common js 

// require is not defined in ES module scope, you can use import instead(app crashes) because "type": "module"

const express = require("express");
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

// GET request
app.get("/", (req, res) => {
  console.log("Hey! It's a GET request");
  res.send("Hello World! GET");
});

// POST request
app.post("/", (req, res) => {
  console.log("Hey! It's a POST request.");
  res.send("Hello World! POST");
});

// PUT request
app.put("/", (req, res) => {
  console.log("Hey! It's a PUT request.");
  res.send("Hello World! PUT");
});

app.get("/index", (req, res) => {
  console.log("Hey! It's Index");
  res.sendFile('templates/index.html', {root: __dirname});    // serving HTML files
});

app.get("/api", (req, res) => {
  res.json({a: 1, b: 2, c: 3, d: 4});  
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${port}/`);
});

/*
Cleaner option → use app.route()

If you’re handling multiple methods on the same path (/ here), Express has a built-in helper:

app.route("/")
  .get((req, res) => {
    console.log("Hey! It's a GET request");
    res.send("Hello World! GET");
  })
  .post((req, res) => {
    console.log("Hey! It's a POST request.");
    res.send("Hello World! POST");
  })
  .put((req, res) => {
    console.log("Hey! It's a PUT request.");
    res.send("Hello World! PUT");
  });
 */
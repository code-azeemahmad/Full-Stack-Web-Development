const express = require("express");
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

// // GET request
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

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${port}/`);
});


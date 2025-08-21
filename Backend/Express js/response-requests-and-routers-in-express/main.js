const express = require("express");
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static("public"));

// GET request
app.get("/", (req, res) => {
  console.log("Hey! It's a GET request");
  res.send("Hello World!");
});

// POST request
app.post("/", (req, res) => {
  console.log("Hey! It's a POST request.");
  res.send("Hello World!");
});

// Start the ser

const express = require("express");
const fs = require("fs"); // write req in a file
const app = express();
const port = 3000;

app.use(express.static("public"));

// Middleware 1 - Logger for application
app.use((req, res, next) => {
  console.log(req.headers);
  req.azeem = 56;
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

// Middleware 2
app.use((req, res, next) => {
    req.azeem = 65;     // order dependent
  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About!" + req.azeem);
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

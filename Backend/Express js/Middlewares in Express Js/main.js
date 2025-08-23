const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // built in middleware --> reads the req before sending it to the client

// Middleware 1
app.use((req, res, next) => {
  console.log("M1");
  // res.send("Hacked by Middleware 1");       // If you call res.send(...), you usually don’t call next(), because the cycle is finished
  next();       // If you omit next() in the first middleware, the request will get stuck and "Hello World!" will never be sent
});

// Middleware 2
app.use((req, res, next) => {
  console.log("M2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About!");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

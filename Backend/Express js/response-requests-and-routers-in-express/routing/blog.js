const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Blog home page");
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About Blog");
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`Fetch the blog post for ${req.params.slug}`);
});

module.exports = router;


/*
All the endpoints starting from /blog are handled by a single file named blog.js
One can work solely on this file and we achieved organization
*/

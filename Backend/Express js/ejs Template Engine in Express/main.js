const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Addidas";
  let searchText = "Search Now";
  let arr = ["Apple", "Banana", "Orange"];
  res.render("./index.ejs", {
    siteName: siteName,
    searchText: searchText,
    arr
  });
});

app.get("/blog/:slug", (req, res) => {
  let blogTitle = "Addidas why and how?";
  let blogContent = "It's a very good brand!"; // we want to push these variables from database into these template files

  res.render("./blogpost.html", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
res.render("", {}) --> render a view

while using ejs, the extension of index.html must be index.ejs
and directory name must be views

<%= variable %> to put value of variable
*/

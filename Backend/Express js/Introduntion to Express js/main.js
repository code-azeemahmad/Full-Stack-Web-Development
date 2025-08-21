const express = require("express");
const app = express();
const port = 3000;

//  app.get(), app.post(), app.delete(), app.put(path, handler)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.get("/blog", (req, res) => {
  // logic to fetch intro to js from the db
  res.send("Welcome to blog");
});

app.get("/blog/:slug/:second", (req, res) => {      // request parameters and queries
  // logic to fetch {slug} from the db
  
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

  res.send(`Welcome to ${req.params.slug} and ${req.params.second}`);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${port}/`);
});

/* 
you will write hundreds of blogs but tell me, is this maintainable?
app.get("/blog/intro-to-js", (req, res) => {
    // logic to fetch intro to js from the db
  res.send("Welcome to JavaScript");
}); */


/*
    console.log(req);
    search: '?mode=dark&region=in',
    query: 'mode=dark&region=in',
*/

/*
    console.log(req.params);
    params: [Object: null prototype] {
    slug: 'intro-to-azeem',
    second: 'intro-to-chemmistry'
    },

*/

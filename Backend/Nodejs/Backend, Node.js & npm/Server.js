// we are now running javascript on backend

console.log("Hello Backend!");

// here is the code where i connect to database and do password authentications
// integrate my application towards business logic

// we initialize our code as an npm project if we want to 
// work with or maintain it for a long, npm init
// npm init, we have made this folder as an npm project,
// we can install some packages in it
// we have initialized it as a single entity

var slugify = require('slugify');

let a = slugify('some string');         // some string
console.log(a);

// If you prefer something else than `-` as separator

const b = slugify('some string*&^%$#', '_')     // some string
console.log(b);

// A slug is the part of a URL that identifies a page in a readable way.
// Example:
// https://example.com/blog/how-to-learn-nodejs
// Here:
// how-to-learn-nodejs → is the slug.

// npm --> node package manager
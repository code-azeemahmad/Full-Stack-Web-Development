const fs = require("fs");       // "type": "common js"
console.log(fs);

// you can also use fs promise in common js (const fs = require("fs/promises"); )

console.log("Starting");

// fs.writeFileSync('Harry.txt', "Harry is a good boy");

fs.writeFile("Harry2.txt", "Harry is a good boy", () => {
  console.log("Done!"); // runs after ending --> async
  fs.readFile("Harry2.txt", (error, data) => {
    console.log(error, data.toString());    // leads to callback hell
  });
});

fs.appendFile("Harry2.txt", " Harry is a Robot", (e, d) => {
    console.log(d);     // logs undefined (it doesn't return data)
});

console.log("Ending");

// fs.writeFileSync("", "") --> works sync, but js wants async
// fs.writeFile("Harry2.txt", "Harry is a good boy", () => {callback function})




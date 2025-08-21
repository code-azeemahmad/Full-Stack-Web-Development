import fs from "fs/promises";        // "type": "module"

let a = await fs.readFile("Harry.txt");

// when you’re inside an ESM module (.mjs file or
// "type": "module" in package.json), you can use
// top-level await without wrapping it in an async function.

let b = await fs.appendFile("Harry.txt", " This is an amazing promise!");

console.log(a.toString(), b);
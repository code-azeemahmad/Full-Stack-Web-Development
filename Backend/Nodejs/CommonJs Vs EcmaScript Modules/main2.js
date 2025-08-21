// import {a, b} from "./mymodules.js";
// console.log(b);     // only be imported with the choosen name

// import azeem from "./mymodules.js";
// console.log(azeem);        // can be imported with any name

const a = require("./mymodule2.js");       // for common js
console.log(a, __dirname, __filename);  



// (function(exports, require, module, __filename, __dirname) {
//     // module code actually lives here
// });

// module and other come from this function(interview), variables you use comes from this function


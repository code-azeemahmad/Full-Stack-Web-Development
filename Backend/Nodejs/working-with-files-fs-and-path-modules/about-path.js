import path from "path";

console.log(path);

let myPath = "F:\\Sigma Web Development\\Full-Stack-Web-Development\\Backend\\Nodejs\\working-with-files-fs-and-path-modules\\about-path.js";

console.log(path.extname(myPath));
console.log(path.dirname(myPath));
console.log(path.basename(myPath));

const mypath = path.join(
  "F:",
  "Sigma Web Development",
  "Full-Stack-Web-Development",
  "Backend",
  "Nodejs",
  "working-with-files-fs-and-path-modules",
  "about-path.js"
);

console.log(mypath);
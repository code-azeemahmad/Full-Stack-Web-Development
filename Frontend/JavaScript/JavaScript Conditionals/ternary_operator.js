/*

syntax for Ternary  Operator

condition ? expressionIfTrue : expressionIfFalse;

*/

let age = 20;
let message = (age >= 18) ? "You are an adult." : "You are not an adult yet.";
console.log(message); // Output: You are an adult.

let score = 65;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "F";
console.log(grade); // Output: C

let a = 20;
let b = 10;
let c = (a > b) ? (a - b): (a + b)
console.log(c); // Output: 10


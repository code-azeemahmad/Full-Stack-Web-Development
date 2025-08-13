const doubled = (a) => a * 2;

console.log(doubled(9));

console.log("__________________");

function add(a, b) {
    return a + b;
}
console.log(add(3, 4))

const sum = (a, b) => {
    return a + b;
}
console.log(sum(3, 4));

console.log("_________________")

/*

const functionName = (parameters) => {
    // function body
};

const square = x => x * x;      If only ONE parameter → parentheses are optional:

const greet = () => console.log("Hello!");      If NO parameters → empty parentheses are required:

const multiply = (a, b) => a * b;       If the body is a single expression → you can skip {} and return:


✅ Great for:
Short, one-liner functions
Callbacks (map, filter, forEach)
Situations where you want this from the outer scope

🚫 Avoid for:
Methods inside objects that use this
Functions that need arguments
Constructor functions

*/

let arr = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];

const double = arr.map( num => num*2);      //  num is parameter
console.log(double);

/*

arr.map(function(num) {     map() needs a callback function that runs for each element of array
    return num * 2;
});


*/
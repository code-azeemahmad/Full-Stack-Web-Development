// Destructuring:
//               assignment is used to unpack values from arrays or
//               properties from objects into distinct variables.

(async function main() {
    let [x, y] = [1, 2, 3];
    console.log(x, y);      // x = 1, y = 2, 3 is not assigned 
})();

(async function main() {
    let [x, y, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(x, y, ...rest);      // x = 1, y = 2, ...rest = 3, 4, 5, 6, 7, 8, 9
})();

(async function main() {
    let obj = {
        a: 1,
        b: 2, 
        c: 3
    }
    let {a, b} = obj;
    console.log(a, b);
})();

// Spread Syntax(...)

function sum(a, b, c) {
  return a + b + c;
}

(async function main() {
    let arr = [3, 4, 5];
    console.log(arr[0] + arr[1] + arr[2]);
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));       // spread operator
})();

// Hoisting done only using var
// declarations come at the top of function

(async function main() {
    console.log(a);         // undefined
    var a = 6; 
})();

// actually, what hoisting did

(async function main() {
    var a;
    console.log(a);         // still undefined but gives error for let/ const
    a = 6;
})();

// no hoisting in let or const


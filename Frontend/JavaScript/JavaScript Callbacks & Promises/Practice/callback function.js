// callback function is a function that is passed as an argument to another function

function sum(a, b) {
    return a + b;
};


function calculator(a, b, sumCallback) {
    return sumCallback(a, b);
}

console.log(calculator(1, 2, sum)); 

// console.log(calculator(1, 2, sum()));        Don't pass sum function with parenthesis, 
//                                              it means we are executing it here

// can be passed a complete function as an argument in a function

console.log(calculator(1, 2, (a, b) => {
    console.log(a + b);
})); 

// setTimeout() uses callback function

const hello = () => {
    console.log("Hello");
}

setTimeout(hello, 3000);

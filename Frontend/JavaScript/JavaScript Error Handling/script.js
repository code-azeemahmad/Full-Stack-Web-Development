let a = 5;
let b = 3;

console.log("a is: ", a);
console.log("b is: ", a);
console.log("a+b is: ", a+b);
// console.log("a+b is: ", a+c);       // error(c is undefined)
// remaining code execution stops

try {
    console.log("a+b is: ", a+c);
}
catch(err) {
    console.log(err);
}

console.log("a-b is: ", a-b);
console.log("a-b is: ", a-b);
console.log("a-b is: ", a-b);

/*
try - catch
    try {
        normal code
    }
    catch(err) {        // err is an error object   
        handing error
    }
*/
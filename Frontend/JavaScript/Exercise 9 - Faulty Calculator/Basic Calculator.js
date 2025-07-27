// Load the prompt-sync module
const prompt = require('prompt-sync')();

// Take input from the user
let a = prompt("Enter first number: ");
a = parseInt(a)
let b = prompt("Enter second number: ");
b = parseInt(b)
console.log("___________________________________________");
    console.log("Basic Calculator");
    console.log("1) Add");
    console.log("2) Subtract");
    console.log("3) Multiply");
    console.log("4) Divide");
let c = prompt("What do you want: ")
c = parseInt(c)
console.log("___________________________________________");
if (c ==  1) 
{
    console.log(`${a} + ${b} =`, a + b);
}
else if (c == 2)
{
    console.log(`${a} - ${b} =`, a - b);
}
else if (c == 3)
{
    console.log(`${a} * ${b} =`, a * b);
}
else
{
    console.log(`${a} / ${b} =`, a / b);
}


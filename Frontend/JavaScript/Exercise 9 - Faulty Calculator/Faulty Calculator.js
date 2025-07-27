const prompt = require(`prompt-sync`)();

function faulty_calculation(a, b, operation)
{
    let rand = Math.random();

    if (rand < 0.1)
    {
        switch(operation)
        {
            case "+":
                return a - b;
            case "*":
                return a + b;
            case "-":
                return a / b;
            case "/":
                return a ** b;
            default:
                return "Invalid Operation";
        } 
    }
    else
    {
        switch(operation)
        {
            case "+":
                return a + b;
            case "*":
                return a * b;
            case "-":
                return a - b;
            case "/":
                return a / b;
            default:
                return "Invalid Operation";

        }
    }
}

let a = prompt("Enter First Number: ")
a = parseFloat(a);
let b = prompt("Enter Second Number: ")
b = parseFloat(b);

let c = prompt("Choose +, -, *, /:  ")
let result = faulty_calculation(a, b, c);

console.log(result);

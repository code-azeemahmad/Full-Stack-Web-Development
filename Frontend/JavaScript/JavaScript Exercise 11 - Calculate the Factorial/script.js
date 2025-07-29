let num = prompt("Enter a number: ")
num = parseInt(num)

let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

alert("Factorial of " + num + " is: " + factorial);

// 6*5*4*3*2*1
let fruits = ["Cherry", "Apple", "Banana"];

console.log(fruits.sort());

// By default, sort() converts values to strings and compares them in Unicode order.

let num = [25, 100, 5];
num.sort();
console.log(num);

// Sorting Numbers require a compare function

num.sort((a, b) => a - b);  // If compare function returns negative → a comes before b.
console.log(num);

num.sort((a, b) => b - a);  // If returns positive → b comes before a.

console.log(num);

/*
sort() changes the original array.
Without a compare function → sorts as strings (can break numeric sorting).
Compare function gives you full control over the order.
*/
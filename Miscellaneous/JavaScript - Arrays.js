let arr = [1, 2,  3, 4, 5,  6,  7]
// arrays can hold many values under a single name
console.log(typeof arr)

console.log(arr.join(" "))

let a = [1, 2, 3, 4, 5];
a.pop();  // removes last elemet
console.log(a);

let b = [1, 3, 4, 5, 6];
b.push(9);  // add element at the end
console.log(b);

let c = [1, 5, 4, 6, 8];
c.shift();  // remove first element
console.log(c);

let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
d.unshift(0);  // add element at the start
console.log(d)

delete arr[6]  // operator
console.log(arr);
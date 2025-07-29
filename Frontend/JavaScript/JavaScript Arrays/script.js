let arr = [1, 2, 3, 4, 5]

console.log(arr.length, typeof arr);   // arrays are objects and return objects

arr[0] = 5600;    // arrays are mutable, unlike strings

console.log(arr[0]);

// important array methods

console.log(arr.toString());
console.log(arr.join(" and "));

a = [1, 2, 3, 4, 5, 6]
a.pop();  // removes last element and return it

a.push(100);  // push a new element at the end of array
a.push("harry") 

a.shift();  // removes first element and return it 
a.unshift("jack")  // adds element to the beginning 

delete a[6];     // delete element on 6th index
console.log(a);  // but in place of that element, empty is written
                 // and length of array remains same that means memory of
                 // that element remained allocated

let a1 = [1, 2], a2 = [3, 4], a3 = [5, 6];

console.log(a1.concat(a2, a3));  // returns a new array and does not change existing arrays

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(num.splice(1, 3));                   //num.splice(index, count), Add new items
console.log(num.splice(1, 3, 63, 65, 64 ));      //num.splice(index, count, number to be added, ...)
console.log(num);

let n = [1, 2, 3, 4, 5, 6, 7]

console.log(n.slice(1, 3));   // slice out elements from an array to make a new array

console.log(n.reverse());



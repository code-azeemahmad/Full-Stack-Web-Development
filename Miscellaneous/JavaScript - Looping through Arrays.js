// ______________________________________________
// |         Higher Order Array Methods         |
// |____________________________________________|


let nums = [1, 2, 3, 4, 5];


// ____________1. forEach() → Runs a function for each element_______________

// array.forEach((element, index, array) => {
//     // code here
// });

nums.forEach(num => console.log(num * 2));

// Doesn’t return a new array — just executes code for each item.

nums.forEach((num, index) => console.log(`Index: ${index}, Element: ${num}`))



// ___________________2. map() — Transform and Return________________________

// array.map((element, index, array) => newValue);

let doubled = nums.map(num => num * 2);
console.log(doubled);

// Great for transforming data.



// __________________3. filter() — Keep What Passes the Test_________________

// array.filter((element, index, array) => condition);

let evens = nums.filter(num => num%2 === 0);
console.log(evens)

// Great for search/filter features.



// _________________4. reduce() — Accumulate to a Single Value_______________

// array.reduce((accumulator, currentValue, index, array) => {
    // return newAccumulatorValue;
// }, initialValue);

let sum = nums.reduce((acc, cur) =>  acc + cur, 0);
console.log(sum)

// accumulator starts as initialValue (or first array item if not provided).
// Very powerful — can be used for sums, products, grouping, flattening arrays.
// Can replace many loops.

/*

Cheat Table: Higher-Order Array Methods

  Method	       Returns	               Purpose
_______________________________________________________________________
|forEach	|    undefined	   |     Loop with side effects           |              
|map	    |    New array	   |     Transform each element           |              
|filter	    |    New array	   |     Keep only matching elements      |                      
|reduce	    |    Any value	   |     Combine elements into one result |                          
|find	    |    Element	   |     First match                      |      
|findIndex	|    Number	       |     Index of first match             |              
|some	    |    Boolean	   |     Any match?                       |  
|every	    |    Boolean	   |     All match?                       |  
|sort	    |    Same array	   |     Sort elements                    |      
|flatMap	|    New array	   |     Map + flatten one level          |                  
|___________|__________________|______________________________________|                       
*/

// __________________________Array.From___________________________________

let str = "Azeem";
let arr = Array.from(str);
console.log(arr);

let e  = [1, 2, 3, 4, 5];
const doub = Array.from(e, num => num*2);  // using map function directly
console.log(doub);

let arrr = Array.from({ length: 5 }, (_, i) => i + 1);      // creating arrays eith given length
console.log(arrr); // [1, 2, 3, 4, 5]

// When to Use Array.from()

// Converting DOM NodeLists to real arrays:

let divs = document.querySelectorAll("div");
let divArray = Array.from(divs);
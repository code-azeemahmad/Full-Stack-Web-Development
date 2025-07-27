// functions are introduced to provide reuseability

function nice(name) {
  console.log("Hey " + name + " you are nice! ");
  console.log("Hey " + name + " you are good! ");
  console.log("Hey " + name + " your tshirt is nice! ");
  console.log("Hey " + name + " your course is good ! ");
}
nice("rohan");


function sum(a, b, c = 3) {
    return a + b
}
a = 2; b = 3;
result = sum(a, b);
console.log("The sum of ", a, " and ", b, " is ", result);

// if you don't pass a parameter, it will give NaN --> Not a Number

// arrow function in js

const func1 = (x, b) => {
    console.log("I am an arrow function",x + b);
}
func1(5, 8)


/*

const person = {
  name: "Azeem",

  regularFunction: function () {
    setTimeout(function () {
      console.log("Regular Function:", this.name);
    }, 1000);
  },

  arrowFunction: function () {
    setTimeout(() => {
      console.log("Arrow Function:", this.name);
    }, 1000);
  }
};

person.regularFunction(); // ❌ prints "Regular Function: undefined"
person.arrowFunction();   // ✅ prints "Arrow Function: Azeem"

_________________________________________________________________________________________________________
| Feature                     | JavaScript Arrow Function   | Python Lambda / C# Lambda                 |
| --------------------------- | --------------------------- | ----------------------------------------- |
| **Anonymous**               | Yes (usually)               | Yes                                       |
| **Short Syntax**            | Yes                         | Yes                                       |
| **Can have multiple lines** | Yes                         | ❌ No (Python), ✅ Yes (C#)              |
| **Can use `this`**          | Lexically bound in JS       | Python: uses outer scope normally         |
| **Used in expressions**     | Yes (e.g., map, filter)     | Yes                                       |
| **Can return objects**      | Yes, with `{}` and `return` | Depends (Python returns expressions only) |
|_____________________________|_____________________________|___________________________________________|

1. 🔁 Regular Function
____________________________________________________________________
| function Person() {                                              |                                     
|   this.name = "Azeem";                                           |                                         
|                                                                  |                 
|   setTimeout(function () {                                       |                                             
|     console.log("Regular Function:", this.name); // ❌ Undefined |                                                                                 
|   }, 1000);                                                      |                             
| }                                                                |                 
|                                                                  |                 
| new Person();                                                    |
|__________________________________________________________________|

❌ this.name is undefined because this inside the setTimeout callback refers to the global object (not Person).

2. ✅ Arrow Function (Lexical this)
___________________________________________________________________
|function Person() {                                              |                                  
|  this.name = "Azeem";                                           |                                  
|                                                                 |              
|  setTimeout(() => {                                             |                                  
|    console.log("Arrow Function:", this.name); // ✅ Azeem       |                                                                      
|  }, 1000);                                                      |                          
|}                                                                |              
|                                                                 |              
|new Person();                                                    |                          
|_________________________________________________________________|              

✅ Now this.name prints "Azeem" because the arrow function uses this from the Person function’s scope.



*/
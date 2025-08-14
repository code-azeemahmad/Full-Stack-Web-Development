let a = 6

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))


//____________Explanation__________________

console.log(Array(7))                         // This creates an empty array with length 7:
console.log(Array(7).keys())                  // .keys() returns an iterator of the array's indexes:
// Array.from(Array(7).keys())                // Array.from() takes something that’s array-like or iterable (like .keys()) and turns it into a real array:
console.log(Array.from(Array(7).keys()))
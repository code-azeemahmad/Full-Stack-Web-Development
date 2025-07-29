let arr = [1, 2, 3, 4, 5,];

// let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newarr.push(element**2);
// }
// console.log(newarr);


// map(); creates a new array by performing some operator on each array element

let newarr = arr.map((e)=> {      // map((element, index, array)
    return e**2;
})
console.log(newarr);

// filter(); filters an array with elements that passes a test creating a new array of passed elements

const Greater_than_2 = (e) => {
    if (e > 3) {
        return true;
    }
    return false
}
console.log(newarr.filter(Greater_than_2));    // filter(function code directly)  


// reduce(); reduces an array to a single value

let arr2 = [1, 2, 3, 4, 5]

const op = (a, b) => {
    return a+b;
}

console.log(arr2.reduce(op));

// Array.from(""); used to create an array from any other object

console.log(Array.from("Azeem"));
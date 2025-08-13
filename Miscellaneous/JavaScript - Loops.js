
array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i <= array.length; i++) {
    const element = array[i];
    console.log(i);
}

console.log("_________________________________")

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skip 3
    if (i === 5) break;    // stop before 5
    console.log(i);
}

console.log("_________________________________")

array.forEach(e => {
    console.log(e);
});

console.log("_________________________________")


// for...of → Loops through values in an iterable (arrays, strings, etc.)

let fruits = ["Apple", "Banana", "Mango"];

for (const e of fruits) {   
    console.log(e)
}

console.log("_________________________________");

let person = {
    Name: "Alex",
    Age: 25,
    City: "Paris"
}

// for...in → Loops through keys/properties(values) of an object

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(key + ':' + element)
        
    }
}

/*

let car = {
    brand: "Toyota",   // key: brand, value: "Toyota"
    year: 2022,        // key: year, value: 2022
    isElectric: false  // key: isElectric, value: false
};

*/
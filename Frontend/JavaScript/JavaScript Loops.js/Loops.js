console.log("I am learning Loops in JavaScript to do repetitive tasks");

//for loop 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for ( let  i = 1; i <= 5; i++)
{
    console.log(i);
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

for (const key in obj) {                                     //for in loop
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key}: ${element}`)
    }
}

for (const c of "Azeem") {   //for of loop
    console.log(c);
}

let i = 0
while (i<=5) {       //while loop
    console.log(i);
    i++;
}


let j = 3;
do {
    console.log(j);   //do-while loop
} while (j!=3);

// for off loop for iterable structures

for (const a of "azeem") {
    process.stdout.write(a);
}

let result = ""
for (const v of "Azeem") {
    result += v
}
console.log(result);
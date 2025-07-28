console.log("I am learning Strings Tutorial");

let a = "Azeem";

console.log(a[0]);
console.log(a[1]);      //"JavaScript is considered a forgiving or 'organic' language because 
console.log(a[2]);      //it tries to avoid throwing errors whenever possible.
console.log(a[3]);      //Instead, it often attempts to continue execution 
console.log(a[4]);      //by automatically correcting or ignoring minor mistakes."
console.log(a[5]);   

console.log(a.length);

let name1 = "Azeem";
let name2 = "Bilal";

// Template literals using back tiks --> string interpolation

console.log(`My name is ${name1} and my Friend's name is ${name2}`);

// Escape sequence characters

//       | Escape      | Meaning                       | Example               | Output               |
//       | ----------- | ----------------------------- | --------------------- | -------------------- |
//       | `\'`        | Single quote                  | `'It\'s good'`        | `It's good`          |
//       | `\"`        | Double quote                  | `"He said \"Hi\""`    | `He said "Hi"`       |
//       | `\\`        | Backslash                     | `"C:\\Program Files"` | `C:\Program Files`   |
//       | `\n`        | New line                      | `"Hello\nWorld"`      | \`\`\`               |
//       | Hello       |                               |                       |                      |
//       | World\`\`\` |                               |                       |                      |


// string properties

console.log(a.toLowerCase()); 
console.log(a.toUpperCase()); 
console.log(a.length);   


// slicing

let b = "Faheem";

// slice(inclusive, exclusive)

console.log(b.slice(1));
console.log(b.slice(0, 4));

// replace 

console.log(b.replace("F", "90"));
console.log(b.replace("Faheem", "Afeem"));

// Concatenation

console.log(a.concat(b, "Cached"));


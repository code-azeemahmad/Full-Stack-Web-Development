let age = 19;
let drive;
if (age >= 18) {
    drive = "Yes! You can drive";
}
else {
    drive = "You ain't allowed to drive";
}

// single-decision cases.
let driver = age >= 18 ? "Yes! you can drive" : "You ain't allowed to drive";
console.log(drive);

/*

condition ? valueIfTrue : valueIfFalse;


*/

let score = 85;

let grade = score >= 90 ? "A"    // Complicated Logic
           : score >= 80 ? "B"   // Less Readability
           : score >= 70 ? "C"   // if-else block is cleaner
           : "Fail";

console.log(grade);

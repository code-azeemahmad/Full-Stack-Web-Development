let a = prompt("Enter a number: ");
let b = prompt("Enter a number: ");
let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {                         // if someone enters a string
    throw SyntaxError("Sorry! this is not allowed!")
}
console.log(sum);

// when in function, sometimes we want to return from try and catch
// (code execution stops after something is being returned ), so in
// that case we use finally to run the code after try/ catch or return

function main() {
    let x = 5;
    try {
        console.log(sum*x);
        return true;
    }
    catch(err) {
        console.log(err);
        return false;
    }
    finally {
    console.log("The files have been closed and DB connection has also been closed!");
    }
};

let c = main();

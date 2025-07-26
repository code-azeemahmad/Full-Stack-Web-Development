var a = 5 
{
    var a = 10
    console.log(a)             // globally scoped
}
console.log(a)

console.log("________________________")

let b = 5
{
    let b = 10
    console.log(b)              // block scoped
}
console.log(b)
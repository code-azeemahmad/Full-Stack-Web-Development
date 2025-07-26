// Var is globally scoped and let, const are block scoped

var a1 = 3

a1 = a1 + 2

var b = 5
var _c = "Azeem"
 

console.log(typeof a1 + typeof b + typeof _c)

const d = 7
// d = d + 1 (not allowed because d is constant)

console.log(a + b + 12 + d)
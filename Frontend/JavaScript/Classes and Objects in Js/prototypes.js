// We can declare our own prototypes

const employee = {
    calTax() {
        console.log("Tax rate is 10%");     // use this  in general programming
    },
    // calTax : function () {              // correct
    //     console.log("Tax rate is 10%");
    // }
}
const karanArjun = {
    salary: 50000,
    calTax() {
        console.log("Tax rate is 20%");     
    }
}
//                         |-------------------------------------------------------------------|
karanArjun.__proto__ = employee;        // used to use the methods of object1 in object2       |----> Reference to an object


/*
Prototypes in JS:
    A javaScript object is an entity having state and behavior (properties and method).
                                                                         |----> special properties
JS objects have a special property called prototype(object itself) ------|
                                                                         |----> special methods like .toString()
We can set prototype using __ proto 

All the objects in js inherit some properties and method from their by default proptotype object
which are pre determined, not declared by us

just like prototype of Array, array.push, pop, shift, unshift, slice, splice etc

To set prototypes --> __proto__

*If object & prototype have same method,
object's method will be us
*/
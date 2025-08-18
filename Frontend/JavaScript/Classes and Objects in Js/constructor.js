/*
Constructor method is 
    --> Automatically invoked by new keyword
    --> initializes object

*/

class ToyotaCar {
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
        console.log("Creating new objects!")
        console.log(brand, mileage)
    }
    start() {
        console.log("The car starts.")
    }
    stop() {
        console.log("The car stops")
    }
    setBrand() {
        console.log("The brand is: ", this.brand)
    }
}

let fortuner = new ToyotaCar("Toyota", 10);     // new creates an object
let lexus = new ToyotaCar("Lexus", 100);
console.log(fortuner);
console.log(lexus);
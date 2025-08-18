class ToyotaCar {
    start() {
        console.log("The car starts.")
    }
    stop() {
        console.log("The car stops")
    }
    setBrand(Brand) {
        this.Brand = Brand
        console.log(this.Brand)
    }
}

let fortuner = new ToyotaCar();     // new creates an object
fortuner.stop();
fortuner.setBrand("Toyota");





/*
Class: 
      is a program code template for creating objects.
      Those objects will have some state(variables) 
      and some behaviours(functions) inside it.
      Blueprint of its objects
class myClass {
    construtor {
    }
    myMethod {
    }
}

we prefer classes when we want multiple objects for same template
*/
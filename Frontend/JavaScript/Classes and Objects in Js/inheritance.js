// Inheritance is passing out methods and properties from parent class to child class

/*

class Parent {
}
class Child extends Parent {
}
if child and parent have same methods, then child methods will be used --> method overriding

 */

class Person {
    constructor() {
        this.species = "Homo sapiens";
    }
    eat() {
        console.log("EAT");
    }
    sleep() {
        console.log("SLEEP");
    }
    task() {
        console.log("Do general Tasks!")
    }
}

class Programmer extends Person {
    task() {
        console.log("CODE");        // child function will run
    }
}

let azeem = new Programmer();
azeem.task();
azeem.eat();
azeem.sleep();
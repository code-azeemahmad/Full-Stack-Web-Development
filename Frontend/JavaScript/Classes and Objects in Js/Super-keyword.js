/*
super Keyword:
    The super keyword is used to call the constructor of its parent class to access the parent's
    properties and methods.

super( args ) // calls Parent's constructor
super.parentMethod( args )
*/

class Person {
    constructor(name) {
        this.species = "Homo sapiens";
        this.name = name;
        console.log("Enter parent constructor");
    }
    eat() {
        console.log("EAT");
    }
}

class Programmer extends Person {       // derived class
    constructor(name) {
        console.log("Enter child constructor");
        super(name);                                // to invoke parent class constructor first
        console.log("Exit child constructor")
    }
     task() {
        super.eat();            // to access parent methods directly in child, access it through super.eat();
        console.log("CODE");        
    }
}

let azeem = new Programmer("Azeem Ahmad");
azeem.task();


// C#: Parent always first, automatic.
// JS: Child constructor executes first, 
// but parent constructor runs only when you call super()

// to pass information from child to parent constructor, pass it through super(info);

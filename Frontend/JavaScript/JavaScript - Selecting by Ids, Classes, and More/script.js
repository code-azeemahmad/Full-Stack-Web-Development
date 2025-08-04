console.log("Code-Azeem");

// parent - child selection work for close relationships

let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[1].style.backgroundColor = "red";

document.getElementById("yellow").style.backgroundColor = "yellow";  // to target a specific element

// id selector is specific but class selector depends on index

document.querySelector(".box").style.backgroundColor = "blue"  // adding inline css via js
// adding css to that selector which is matched first

console.log(document.querySelectorAll(".box"));   // returns an html collection of elements in which class is box

// document.querySelectorAll(".box").style.backgroundColor = "gray";  
// TypeError: Cannot set properties of undefined (setting 'backgroundColor'), use for loop to target each element in node list
// because css properties are applied to an element, not on list or arrays

console.log(document.querySelectorAll(".box").forEach(e => {
    console.log(e);  // prints each element in node list
})); 

console.log(document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "gray"  // applies property to each element in node list
})); 

document.body.getElementsByTagName("div")  // returns collection or list of all divs

//_____________________________________________________________________________________

e = document.body.getElementsByTagName("div"); 

e[3].matches("#yellow")  // to check if element matches the given css selector
// true

e[3].closest(".container")  // to look for the nearest ancestor that matches the given css selector. element itself is also checked
// return complete tag of ancestor

document.querySelector(".container").contains(e[3]);    // returns true if element_B is inside element_A(a descendent of  element_A) or when Element_A == Element_B
// true
document.querySelector("body").contains(document.querySelector(".container"));
// true
document.querySelector(".container").contains(document.querySelector("body"));
// false


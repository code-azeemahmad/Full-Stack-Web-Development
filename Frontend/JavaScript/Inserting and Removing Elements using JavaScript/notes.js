document.body.querySelector(".box")

document.body.querySelector(".box").innerHTML

document.body.querySelector(".container").innerHTML

document.body.querySelector(".container").innerText

document.body.querySelector(".container").outerHTML   
// container itself + inner html

document.body.querySelector(".container").tagName   // applicable for elements
// div

document.body.querySelector(".container").nodeName  // applicable for all nodes
// div

document.body.querySelector(".container").textContent
// text content inside
document.body.querySelector(".container").hidden
// false

document.body.querySelector(".container").hidden = true;  // add hidden attribute to container
// true

document.body.querySelector(".box").innerHTML = "Hey! I am Azeem"  // change inner html

document.body.querySelector(".box").hasAttribute("style")
// false / true

document.body.querySelector(".box").getAttribute("style") 
// display: flex;

document.body.querySelector(".box").setAttribute("style", "display: inline;") 

document.body.querySelector(".box").attributes

document.body.querySelector(".box").removeAttribute("style")

document.designMode = "on"

// data_attributes to add custom attributes

document.body.querySelector(".box").dataset
// DOMStringMap {createdby: 'Azeem'}

document.querySelector(".container").insertAdjacentHTML()
document.querySelector(".container").insertAdjacentText()
document.querySelector(".container").insertAdjacentElement()

document.body.querySelector(".box").remove()  // removes node

document.querySelector(".container").classList  // list of classes used
// DOMTokenList ['container', value: 'container']

document.querySelector(".container").className

document.querySelector(".container").classList.add("red")

document.querySelector(".container").classList.remove("red")

document.querySelector(".container").classList.toggle("red")
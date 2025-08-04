document.body

document.body.childNodes   //obtain all child nodes of body

/*
NodeList(5) [text, div.container, text, script, text]
0: text
1: div.container
2: text
3: script
4: text

length: 5
*/

document.body.childNodes[1]   //give child node on index 1

document.body.childNodes[1].childNodes   //give child nodes inside a child node

// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]

cont
// div.container

cont.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

cont.firstChild

cont.lastChild

cont.firstElementChild  // give first child which is an element that is div.box

cont.lastElementChild   // text node and comment node are not elements 

cont.lastElementChild.style.background = "red"

cont.lastElementChild.parentElement  // give parent element that is div.container of child element

cont.children  // give only element children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.childNodes[1].children[2]     // OR
let cont = document.body.firstElementChild

cont.children[2]
// <div class="box">Box 3</div>

cont.children[2].nextElementSibling  // give box 4

cont.children[2].nextSibling  // give text node
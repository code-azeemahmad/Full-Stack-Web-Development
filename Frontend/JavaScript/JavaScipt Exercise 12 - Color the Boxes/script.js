alert("Hello Azeem")

function getRandomHexColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[0].style.color = getRandomHexColor();
// boxes[1].style.color = getRandomHexColor();
// boxes[2].style.color = getRandomHexColor();
// boxes[3].style.color = getRandomHexColor();
// boxes[4].style.color = getRandomHexColor();

// boxes[0].style.backgroundColor = getRandomHexColor();
// boxes[1].style.backgroundColor = getRandomHexColor();
// boxes[2].style.backgroundColor = getRandomHexColor();
// boxes[3].style.backgroundColor = getRandomHexColor();
// boxes[4].style.backgroundColor = getRandomHexColor();

console.log(document.querySelectorAll(".box").forEach( e=> {
    e.style.backgroundColor = getRandomHexColor();
    e.style.color = getRandomHexColor();
}));

console.log(document.querySelectorAll(".box").forEach(e=> {
    console.log(e);
}))


console.log("Script.js initializing")

// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(Math.random()* 255);
    let val2 = Math.ceil(Math.random()* 255);
    let val3 = Math.ceil(Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

// to generate random number between a and b, a + Math.random() * (b - a)

// to generate random color between black and white, 0 + Math.random() * (255 - 0)

// Math.ceil(0 + Math.random() * (255)) --> Math.floor(Math.random() * 255)



// Math.ceil() --> rounds up to nearest integar, 
// For random numbers, this makes the smallest value 1, never 0

// Math.floor() --> rounds down to nearest integar, 
// For random numbers, this is great when you want a range starting from 0 up to (but including) the max.
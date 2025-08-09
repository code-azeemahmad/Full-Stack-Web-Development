console.log("Azeem");
console.log("Bilal");

setTimeout((e)=> {
    console.log("The setTimeout is async and will be executed later");
}, 2000) //  js will not wait for 2s and make to preffered at last

setTimeout((e)=> {
    console.log("I am second setTimeout");
}, 0)

console.log("The end");

const callback = (arg) => {
    console.log(arg);
}
                                                  // to run function on demand
                                                  // to pass a function as a variable
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("azeem");
    document.head.append(sc);
}
loadscript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
);

/*
Azeem
Bilal
The end
I am second setTimeout
azeem
The setTimeout is async and will be executed later
*/
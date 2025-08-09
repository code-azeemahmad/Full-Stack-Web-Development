console.log("Azeem");
console.log("Bilal");

setTimeout((e)=> {
    console.log("The setTimeout is async and will be executed later");
}, 2000)

setTimeout((e)=> {
    console.log("I am second setTimeout");
}, 0)

console.log("The end");

//__________________________________Pyramid of Doom____________________________________


const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}
                                                  
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("azeem", fn);
    document.head.append(sc);
}
loadscript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
    callback
    fn("firstarg", () => {
        ddg("secondarg", () => {

        })
    })
});

//______________________Code becomes complicated, so we use promises______________________
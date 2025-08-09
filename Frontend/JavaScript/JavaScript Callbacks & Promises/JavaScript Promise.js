console.log("Promise in javascript");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was supportinng you!");
  } else {
    setTimeout(() => {
      console.log("Yes! I am done");
      resolve("Harry");
    }, 3000);
  }                            // network request will either be accepted or rejected
});
prom1.then((a) => {
  console.log(a);
}).catch((err) => {
    console.log(err)
})


/* Promise chaining is when you use multiple .then() calls one after another so the output of one promise is passed to the next.
It’s like saying: "Do this, then that, then that…" in a clean sequence.` */

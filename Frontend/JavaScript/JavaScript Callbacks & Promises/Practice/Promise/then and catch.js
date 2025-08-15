// once we get a Promise, it's on us to use it effectivly

// then() method is used when the promise is fulfilled
// catch() method is used when promise is rejected

const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("i am a promise");
    resolve("Success");
    // reject("Ho Error!");
});
}; 

// automatic parameters comes that are result in case of then and error in case of catch that we can print

let prom1 = getPromise();
prom1.then((res) => {         
    console.log("Promise Fulfilled!", res)
})

// let prom2 = getPromise();
// prom2.catch((err) => {
//     console.log("Rejected Hoho", err)
// })









//          promise.then = () => {     |      promise.then(() => {                                               
//                                     |
//          }                          |      })              

    








// let promise1 = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     reject("some error occured ");
// });
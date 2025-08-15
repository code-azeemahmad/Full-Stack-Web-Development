function AsyncFunct1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 1");
            resolve("Success");
        }, 4000);
    })
};

function AsyncFunct2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data 2");
            resolve("Success");
        }, 4000);
    })
};

// promises are returned by APIs and we just apply then() to them

// console.log("Fetching Data 1.........")

// let prom1 = AsyncFunct1();
// prom1.then((res) => {
//     console.log(res);
// })

// console.log("Fetching Data 2.........")

// let prom2 = AsyncFunct2();
// prom2.then((res) => {
//     console.log(res);
// })

// data1 and data2 are fetching simultaneously

//________________________________________________________________________________

// we want to fetch data1 first and then data2 


// console.log("Fetching Data 1.........")       // no need to print result
// let prom1 = AsyncFunct1();
// prom1.then((res) => {
//     console.log("Fetching Data 2.........")
//     let prom2 = AsyncFunct2();
//     prom2.then((res) => {});
// })


// same work was doing with callback but promises syntax is easier and cleaner

console.log("Fetching Data 1.........")       // more cleaner syntax
AsyncFunct1().then(() => {
    console.log("Fetching Data 2.........")
    AsyncFunct2().then(() => {});
})


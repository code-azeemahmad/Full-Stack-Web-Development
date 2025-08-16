// async - await make async programming simple

// Async - Await >> Promise Chaining >> Callback Hell

async function Hello() {        // always auto return a promise
    console.log("hello")
}

async function API() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Temperature");
            resolve("200");
        }, 2000);
    });
};

// await is only applicable in async functions

async function getWeatherData() {
    await API();    // 1st Call to complete
    await API();    // 2nd Call after the completion of 1st call
};

// let one task complete first and then other task, async-await provide suitable syntax for it
// eg first username checks and then password

async function getData(dataId) {                    
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("success");
  }, 2000);
  });
};

async function getAllData() {                       // cleanest and easiest to understand
    console.log("Getting Data1 ........");
    await getData(1);
    console.log("Getting Data2 ........");
    await getData(2);
    console.log("Getting Data3 ........");
    await getData(3);
    console.log("Getting Data4 ........");
    await getData(4);
    console.log("Getting Data5 ........");
    await getData(5);
    console.log("Getting Data6 ........");
    await getData(6);
};

// use async-await in most of the cases, better way of programming
// use .then() and .catch() also 
// but async-await can't be used where then-catch is used and vice versa.


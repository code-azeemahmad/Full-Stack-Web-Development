// IIFE --> Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined. 
// Part of advanced Js, asked in interviews
// no name, written once, auto execution
// IIFE --> (function)();


async function getData(dataId) {                    
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("success");
  }, 2000);
  });
};

// async-await require another function to call unnecessary unlike callbacks or promises
// use IIFE to prevent unnecessary callbacks

(async function() {                       
    console.log("Getting Data1 ........");
    await getData(1);
    console.log("Getting Data2 ........");
    await getData(2);
    console.log("Getting Data3 ........");
    await getData(3);
})();
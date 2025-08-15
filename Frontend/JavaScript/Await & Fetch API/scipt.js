// promise is the promise of code execution

function getData() {        // don't know how much will it take to get data from server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(500);   
    }, 3000);               // returns a Promise
  });
}

console.log("Loading Modules"); // code to be executed

console.log("Do something else");

console.log("Load Data"); // data should be first loaded and then processed

// let Data = getData();         // callback approach

// Data.then((v) => {

//   console.log(Data);

//   console.log("Process Data");

//   console.log("Task  2");
// })

// async/ await is new approach to wait for data



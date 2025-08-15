async function getData() {      // async --> it keeps running in background and remaining code runs
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(500);
    }, 3000);                   // Simulate fetching data from a server (which takes time)
  });
}

// want to wait for async, make await function. Wrap the code in main function

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");

  let Data = await getData();       // await --> wait for async function

  console.log(Data);

  console.log("Process Data");

  console.log("Task  2");
}

main();

// get request is used to get acccess to a page or site
// post request is used to send big data while submitting forms
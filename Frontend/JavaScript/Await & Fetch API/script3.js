
// _______________Fetch API____________________

// simulate fetching data from a server

async function getData() {      
  let x  = await fetch('https://jsonplaceholder.typicode.com/todos/1')      // return promise
      let data = await x.json();                                            // parse data promise
      console.log(data);               //  async/ await is a cleaner way to fetch API
      return data;
}

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


// Settle means resolve or reject

// resolve means promise has settled successfully

// reject means promise has not settled successfully

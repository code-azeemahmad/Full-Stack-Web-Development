// API --> Application Interface Programming
// Request and response, we don't know much about the data provided
// API are url endpoints
// Browser sends a request to Google server which returns Page in response
// https://free-apis.github.io/#/browse

const url = "https://catfact.ninja/facts";      // url which will receive request to send data

const getFact = async() => {
    console.log("Getting Data...");
    let response = await fetch(url);        // it may take time, so we use await
    console.log(response.status);
};

// data returning from api after receiving request would not reload the page
// though it is getting new information or updating information
// information is updated at runtime
// In general, page has to be reloaded to update information



//   Request ---------->|
//                      |
//                     url
//                      |
//   Response <---------| 

// status: 200 means successful request. Data has been received.
// let promise = fetch(url);       // always returns a promise



// let promise2 = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("Success");
// });

// let promise1 = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     reject("some error occured ");
// });

function getData(dataId, getNextData) {             // get Data() will return a promise when called
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Data: ", dataId);          // show pending before timeout or before printing data
            resolve("Success");                     // after timeout, promise is resolved after printing data
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    });
}

// promise is pending as we have not resolved or rejected promise

                
                
                
                
                
                
// promise is an object in js, having three states and two handlers
// complete the promise using resolve or reject, and generate final result or error
// we don't create promises, in real life, other systems and APIs generate promises for us   
                
//                           Promise
//                          /   |   \
//                         /    |    \
//                        /     |     \   
//                   Pending    |   Rejected
//                              |
//                      Fulfilled(resolves) 

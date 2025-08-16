
function getData(dataId) {                    // no need a callback function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data", dataId);
    resolve("success");
  }, 2000);
  });
};

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//       console.log(res);
//     })
// });

// promise chaining
getData(1).then((res) => {
    return getData(2);
    }).then((res) => {
      return getData(3);
}).then((res) => {
  console.log(res);          // cleaner than callback hell and easier to understand 
});                          // but not much easier once we start adding console.log()
                             // for this, we use the concept of async/ await


// getData(1, ()=> {               
//     getData(2, () => {         
//         getData(3, () => {
//             getData(4)
//         });
//     });                 
// });                            


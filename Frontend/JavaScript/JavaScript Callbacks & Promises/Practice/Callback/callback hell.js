// function getData(dataId) {
//     console.log("data", dataId)
// }

// suppose, it takes time to fetch data 2s

// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }

// getData(1);     // 2s   timers of all three
// getData(2);     // 2s   start simultaneuosly to get
// getData(3);     // 2s   data of all three at a time

// now, we want data1 first after delay of 2s, then data2 after delay of 2s and then data3 after delay of 2s
// data1    2s
// data2    2 + 2 = 4s
// data3    2 + 2 + 2 = 6s

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
        getNextData();
    }
  }, 2000);
}

// getData(1, getData(2));      WRONG, this function with prenthesis is executed here and give error

getData(1, ()=> {               // Arrow Callback Function --> real life programming, big tech companies write code in this way
    getData(2, () => {          // Everyone should learn this way, and it comes through experience
        getData(3, () => {
            getData(4)
        });
    });                 
});                             // this is very complicated to understand --> Callback Hell/ Pyramid of Doom





// Callback Hell: Nested Callbacks stacked below one another forming a Pyramid structure
                //   (Pyramid of Doom)
                // this programming style becomes difficult to understand and manage
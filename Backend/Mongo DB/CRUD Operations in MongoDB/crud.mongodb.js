use("crudDB");

// console.log(db);

// db.createCollection("Courses");

// db.courses.insertOne({
//     name: "Azeem",
//     price: 0,
//     assignemnt: 12,
//     projects: 45
// });

// db.courses.insertMany(
//     [
//   {
//     "name": "Azeem",
//     "price": 0,
//     "assignment": 12,
//     "projects": 45
//   },
//   {
//     "name": "Sara",
//     "price": 1000,
//     "assignment": 10,
//     "projects": 30
//   },
//   {
//     "name": "Ali",
//     "price": 500,
//     "assignment": 8,
//     "projects": 20
//   },
//   {
//     "name": "Hassan",
//     "price": 1500,
//     "assignment": 15,
//     "projects": 35
//   },
//   {
//     "name": "Fatima",
//     "price": 2000,
//     "assignment": 20,
//     "projects": 40
//   },
//   {
//     "name": "Bilal",
//     "price": 750,
//     "assignment": 5,
//     "projects": 10
//   },
//   {
//     "name": "Maryam",
//     "price": 1800,
//     "assignment": 18,
//     "projects": 42
//   },
//   {
//     "name": "Hamza",
//     "price": 2200,
//     "assignment": 22,
//     "projects": 50
//   },
//   {
//     "name": "Usman",
//     "price": 3000,
//     "assignment": 25,
//     "projects": 55
//   }
// ]

// )

// let a = db.courses.find({price: 0});
// console.log(a.count());
// console.log(a.toArray());



// db.courses.updateOne({price: 3000}, {$set: {price: 750}});      // atomic operator --> &set: {}

// db.courses.updateMany({price: 0}, {$set: {price: 500}}); 

// db.courses.updateOne({price: 500}, {$set: {price: 450}}); 

let b = db.courses.find({price: 500});
console.log(b.count());


// db.courses.deleteMany({name: "Azeem", price: 500});

db.courses.deleteOne({name: "Usman", price: 750});
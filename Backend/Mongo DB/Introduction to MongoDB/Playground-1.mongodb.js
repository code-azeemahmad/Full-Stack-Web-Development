use('languagedb');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "Java",
    "price": 20000,
    "instructor": "Azeem"
  },
  {
    "name": "Python",
    "price": 18000,
    "instructor": "Sara"
  },
  {
    "name": "JavaScript",
    "price": 15000,
    "instructor": "Ali"
  },
  {
    "name": "C++",
    "price": 17000,
    "instructor": "Hassan"
  },
  {
    "name": "Web Development",
    "price": 25000,
    "instructor": "Fatima"
  },
  {
    "name": "Machine Learning",
    "price": 30000,
    "instructor": "Bilal"
  },
  {
    "name": "Cyber Security",
    "price": 28000,
    "instructor": "Maryam"
  },
  {
    "name": "React.js",
    "price": 16000,
    "instructor": "Hamza"
  },
  {
    "name": "Node.js",
    "price": 15500,
    "instructor": "Usman"
  },
  {
    "name": "Data Structures & Algorithms",
    "price": 22000,
    "instructor": "Ahmed"
  }

]);

console.log(`Done inserting data!`);


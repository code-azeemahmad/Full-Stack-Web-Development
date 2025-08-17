const student = {
    fullName: "Azeem",      // properties, states
    rollNo: 63,
    marks: 95,
    age: 20,
    college: "UET",
    printMarks: function mark() {       // methods, behaviours
        console.log("Marks:", this.marks)       // this.marks --> student.marks
    }
}

// prototypes is one of the two methods of creating objects
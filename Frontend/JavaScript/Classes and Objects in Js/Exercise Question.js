let data = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`Name: ${this.name}, Email: ${this.email}`)
        console.log("Website Data: ", data);
    }
}

class Admin extends User {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    editData() {
        
        data = "Information Edited by Admin";
        console.log(data);
    }

}

let azeem = new User("Azeem Ahmad", "Azeemnadeem327@gmail.com");
let bilal = new User("Bilal Ibrahim", "Bilalibrahim231@gmail.com");

let nazeef = new Admin("Nazeef ul Haq", "Nazeef@uet.edu.pk")

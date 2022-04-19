//* SubClasses

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  sayHi(){
      return `Hello ${this.name} `
  }

  static getTotal(){
      return `Total is 1000`;
  }

}

class Customer extends Person {
  constructor(name, lastname, phone, username) {
    super(name, lastname);
    this.phone = phone;
    this.username = username;
  }
}

let customer1 = new Customer("Ozan","Eski",154066,"Idriski")
let person1 = new Person("Adil","Eren")
console.log(customer1.sayHi())
// console.log(customer1.getTotal()) // error
console.log(Person.getTotal())
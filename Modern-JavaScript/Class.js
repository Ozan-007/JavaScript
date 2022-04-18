//* Classes

// class Person {
//     constructor(name,lastname,yearofBirth){
//         this.name = name;
//         this.lastname = lastname;
//         this.yearofBirth = yearofBirth;
//     }

//     calculateAge(){
//         return 2022 - this.yearofBirth
//     }

//     static sayHi(){
//         console.log(`Hi, I'm new in the States`)
//     }

// }

// let ozan = new Person("Ozan","Eski",2000)

// console.log(ozan.calculateAge())

//* Static Methods

// we can't reach the static methods from objects. ozan.sayHi() is not going to work. //! TypeError ozan.sayHi is not a function.

// Person.sayHi() // works.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

let d1 = new Point(10, 10);
let d2 = new Point(20, 30);
console.log(d1.x);

console.log(Point.distance(d1, d2));


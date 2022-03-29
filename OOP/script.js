// // let person = {
// //     job: "student",
// //     getAge: function(yearofBirth){
// //         return new Date().getFullYear() - this.yearofBirth;
// //     }
// // }

// // We can define it like this also we can add values of the object as the second property.
// // let harry = Object.create(person,{
//     //     name:{value:"Harry"},
//     //     yearofBirth:{value:1989}
//     // })
    
// // let ozan = Object.create(person) 
// // ozan.yearofBirth = 2000
// // console.log(ozan) // We can take an object attributes to another object as prototype.
// // console.log(harry)

// // ****************************************

// // Prototypal Inheritance

// let Person = function(name,yearofBirth,job){

//     this.name = name;
//     this.yearofBirth = yearofBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge = function(){
//    return 2022 - this.yearofBirth;
// }


// let Teacher = function(name,yearofBirth,job,subject){
//     Person.call(this, name,yearofBirth,job)
//     this.subject = subject;
    
// }

// // Inherit the Person prototype methods.
// Teacher.prototype = Object.create(Person.prototype)

// // console.log(Teacher.prototype.constructor)

// Teacher.prototype.constructor = Teacher;


// let james = new Teacher("James",1996,"teacher","math")
// console.log(james.calculateAge())


// // ****************************************

// // Built in Constructors

// // Strings

// let name1 = new String("Ozan")
// let name2 = "Ozan";
// console.log(name1)
// console.log(typeof(name1))
// console.log(name2)
// console.log(typeof(name2))

// if (name2 == "Ozan") {
//     console.log("Ozan")
// }

// !!In the below example it is not true because name1 returns an Object.!!

// if (name1 === "Ozan") {
//     console.log("True")
// }
// else{
//     console.log("False")
// }













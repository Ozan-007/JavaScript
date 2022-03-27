// let person = {
//     job: "student",
//     getAge: function(yearofBirth){
//         return new Date().getFullYear() - this.yearofBirth;
//     }
// }

// let ozan = Object.create(person) // We can define it like this also we can add values of the object as the second property.
// let harry = Object.create(person,{
//     name:{value:"Harry"},
//     yearofBirth:{value:1989}
// })

// ozan.yearofBirth = 2000
// console.log(ozan) // We can take an object attributes to another object as prototype.
// console.log(harry)

// ****************************************

// Prototypal Inheritance

let Person = function(name,yearofBirth,job){

    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
   return 2022 - this.yearofBirth;
}


let Teacher = function(name,yearofBirth,job,subject){
    Person.call(this, name,yearofBirth,job)
    this.subject = subject;
    
}

// Inherit the Person prototype methods.
Teacher.prototype = Object.create(Person.prototype)

// console.log(Teacher.prototype.constructor)

Teacher.prototype.constructor = Teacher;


let james = new Teacher("James",1996,"teacher","math")
console.log(james.calculateAge())










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


// Number 

// let num1  = 1999;
// let num2  = new Number(2022);

// console.log(num1) // returns 1999
// console.log(typeof(num1)) // type is 'number'
// console.log(num2)// returns [Number: 2022]
// console.log(typeof(num2)) // type is object 


// if(num1 === 1999){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if(num2 === 2022){ //!! Type is not Equal
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// *********

//Boolean

// let var1 = new Boolean(true)
// let var2 = true

// console.log(typeof(var1))
// console.log(typeof(var2))

// **********


// String.prototype.repeat = function(n){
//     return new Array(n+1);
// }

// console.log('ozan'.repeat(2)); 
// console.log(new Array(6)); 



let arr1 = new Array("Ozan","Adil","Ankara")
let arr2 = ["Ozan","Adil","Ankara"]

// console.log(typeof(arr1))
// console.log(typeof(arr2))


Array.prototype.remove = function(element){
    let index = this.indexOf(element);
    if(index > -1){
        this.splice(index,1);
    }
    return this;
}

arr2.remove('Ankara')
console.log(arr2)
















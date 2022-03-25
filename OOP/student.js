// let student = {
//     name: "Ozan",
//     lastname: "Eski",
//     number:150
// }
// console.log(student);

// Constructor Functions

// function Student(name,lastname,birthyear,number){
//     this.name= name;
//     this.lastname = lastname;
//     this.number= number;
//     this.birthyear = birthyear;
//     this.getAge = function getAge(){ return (new Date().getFullYear())-birthyear}
//     // console.log(this) // 'this' refers to the object itself.
// }

// let student1 = new Student("Otto","Castle",2000,148);
// student1.number = 879;
// console.log(student1.getAge());



// Inheritance

let Person = function(name,yearofBirth,job) {
    this.name= name;
    this.yearofBirth = yearofBirth;
    this.job = job;
    // this.calculateAge = function(){new Date().getFullYear()-yearofBirth}

}

// Person.prototype.calculateAge = function(){
//    return new Date().getFullYear() - this.yearofBirth
// }


// Person.prototype.getName = () =>{this.name}

// let emma = new Person("emma",1997,"teacher");
// let john = new Person("john",2008,"student");



// console.log(emma)
// console.log(emma.getName())
// console.log(emma.calculateAge())
// console.log("*********************")
// console.log(john.getName())
// console.log(john.calculateAge())


// ******************************************

function Employee(name,salary){
    this.name = name;
    this.salary = salary;

    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }

}

Employee.prototype.CalculateNetSalary = () =>{

    
    tax = 0;
    if(salary*12 <20000){
        tax = salary*0.2
        salary -= tax
    }
    else if(salary*12>20000 && salary<30000){
        tax = salary*0.25
        salary -= tax
    }
    else{
        tax = salary*0.3
        salary -= tax
    }

    return {
        tax:tax,
        salary:salary,
     }

}


let ozan = Employee("Ozan",3000);
let emma = new Employee("Emma",2500);
let julie = new Employee("Julie",1000);


console.log(emma)
console.log(julie.CalculateNetSalary()['tax','salary'])







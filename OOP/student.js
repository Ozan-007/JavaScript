let student = {
    name: "Ozan",
    lastname: "Eski",
    number:150
}
console.log(student);

// Constructor Functions

function Student(name,lastname,birthyear,number){
    this.name= name;
    this.lastname = lastname;
    this.number= number;
    this.birthyear = birthyear;
    this.getAge = function getAge(){ return (new Date().getFullYear())-birthyear}
    // console.log(this) // 'this' refers to the object itself.
}

let student1 = new Student("Otto","Castle",2000,148);
student1.number = 879;
console.log(student1.getAge());

//!! 1

//Person

function Person(name){
    this.name=name;
}
Person.prototype.introduce = function(){
    return("My name is: " + this.name )
}

// Teacher

function Teacher(name,branch){
    Person.call(this,name)
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype)

Teacher.prototype.constructor = Teacher


Teacher.prototype.teach = function(){
    console.log("Teaching...")
}


// Student

function Student(name,number){
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype)


Student.prototype.study = function(){
    return ("Studying...")
}



// HeadMaster

function HeadMaster(name,branch) {
    Teacher.call(this,name,branch);
    
}

HeadMaster.prototype = Object.create(Teacher.prototype);

HeadMaster.prototype.constructor = HeadMaster;

HeadMaster.prototype.shareTask = function(){
    return ("Shared Tasks.")
}

console.log(HeadMaster.prototype.constructor)


let aylin = new Teacher("Aylin","math");

let ozan = new Student("Ozan",1500)

console.log(ozan.study())
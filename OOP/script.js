let person = {
    job: "student",
    getAge: function(yearofBirth){
        return new Date().getFullYear() - this.yearofBirth;
    }
}

let ozan = Object.create(person) // We can define it like this also we can add values of the object as the second property.
let harry = Object.create(person,{
    name:{value:"Harry"},
    yearofBirth:{value:1989}
})

// ozan.yearofBirth = 2000
// console.log(ozan) // We can take an object attributes to another object as prototype.
console.log(harry)
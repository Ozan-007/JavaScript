// Getters and Setters

// let person  = {
//     name: "Ozan",
//     lastname: "Eski",
//     fullname: function(){
//         return this.name + " " + this.lastname
//     }
// }

//-2-

// let person  = {
//     name: "Ozan",
//     lastname: "Eski",
//     getFullName: function(){
//         return this.name + " " + this.lastname
//     },
//     setFullName: function(fullname){
//         values = fullname.split(" ")
//         this.name = values[0];
//         this.lastname = values[1];
//     }
// }

// person.setFullName("Adil Eren");
// console.log(person.getFullName())


//-3-

// let person  = {
//     name: "Ozan",
//     lastname: "Eski",
//     get fullName(){
//         return this.name + " " + this.lastname
//     },
//     set FullName(fullname){
//         values = fullname.split(" ")
//         this.name = values[0];
//         this.lastname = values[1];
//     }
// }

// person.FullName = "Lebron James";
// console.log(person.fullName)


// -4-

// let person  = {
//     name: "Ozan",
//     lastname: "Eski"}


// Object.defineProperty(person,"yearofBirth",{value : 2000})
    
// console.log(person.yearofBirth) // returns 2000;
    
// console.log(person) // There is no yearofBirth only shows name and lastname.
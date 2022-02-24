const fullName = "Ozan Eski"
const city  = 'London';
const yearOfBirth = 2012;

let val;
let value;
val = 'My name is '+fullName+' I\'m '+(2022-yearOfBirth) + " years old"

value = `My name is ${fullName} ${2022-yearOfBirth >=21?"I am over 21": "I am under 21"} I live in ${city}`


console.log(value)
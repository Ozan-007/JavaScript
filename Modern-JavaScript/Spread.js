//* Spread Operator 

// function getTotal(a,b,c) {
//     return a+b+c;
// }

// console.log(getTotal(10,20,30));


// let numbers = [10,20,30];

//ES5

// console.log(getTotal.apply(null,numbers)) 

//ES6

// console.log(getTotal(...numbers)) // ... assigns values inside of the array to the function.


//? How to join two arrays ?

let arr1 = ["two","three","four"];
let arr2 = ["six","seven","eight"];

let arr3 = ["one",...arr1,"five",...arr2]

// arr1.push(...arr2) // push method does this for every element in the array.
// arr1.unshift(...arr2) // unshift adds elements to the beginning of the array for every element in the array.
console.log(arr1) // returns ["two","three","four","six","seven","eight"]
console.log(arr3) // returns ["one","two","three","four","five","six","seven","eight"]
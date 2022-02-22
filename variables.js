// console.log('Ozan')
// // alert("Hello World!")
// console.error("Error")
// console.warn("Warning")


// PART 1 :  Variables --> var, let, const


// Difference between var and let is all about their scopes.

// let city="London"
// console.log(city)

// const country="Germany"
// console.log(country)

// If you use const when we define a variable it means that we can not assign it again.

// **********************************************************

// PART 2 : Variable Types

// // Primitive Types
    
//     // String 
//     let firstName = "Ozan"

//     // Number
//     let age = 50
    
//     // Boolean
//     let isTrue = true;

//     //null
//     let job=null;
    
//     //undefined
//     let bike;

//     // console.log(typeof bike)


// // Reference Types - Objects

//     // Arrays
//     let numbers = [1,2,3,4,5]

//     // Objects
//     let players ={
//         name:"Ozan",
//         heigth:176
//     }

//     //Functions
//     let getNew = function(){
//         return 0
//     }
//         // arrow function
//     let calculateAge = () => {
//         return 1 
//     }

//     console.log(typeof getNew)

// *****************************************************

// PART 3 : Type Transition

//String to Number

    // let num1 = "230"
    // let num2 = Number("50")

    // console.log(num1+num2)
    // console.log(typeof (num1+num2)) // returns string because variables are string also when addition it adds them like (2305).
    // console.log(typeof Number(num1+num2)) // But we can convert them into number with puttin them inside of Number() method.


// Number to String

    // let value = 100
    // console.log(typeof String(value)) // returns string
    // console.log(typeof value) // returns number


//Boolean to String

    // let isAdmin = true
    
    // console.log(typeof String(isAdmin)) //returns string
    // console.log(isAdmin) //returns itself
    // console.log(typeof isAdmin) //returns booleand
    
    // let isAdmin = new Date()


// Array to String

    // let numbers = String([1,2,4,5,2])

    // console.log(typeof numbers)


//  toString()

    // let val = (10).toString()
    // console.log(typeof val)


//parseInt
//parseFloat

// let val1 = parseInt("10.05")
// let val2 = parseFloat("10.05")
// console.log(val1)
// console.log(val2)
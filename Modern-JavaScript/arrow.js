// // Arrow Functions

// //ES5

// let welcomeES5 = function(){
//     console.log("Hello from the ES5");
// }

// welcomeES5();

// let welcomeES6 = () => {
//     console.log("ES6 is the new one.")
// }

// welcomeES6();

// //with parameters 

// let multiplyES5 = function(x,y){
//     return x*y
// }


// let multiplyES6 = (x,y) =>  x*y 


// console.log(multiplyES5(5,2)) 
// console.log(multiplyES6(5,2)) 



// // SPlit ES5

// let splitES5 = function(text){
//     return text.split(" ")
// }


// // SPlit ES6


// let splitES6 = (text) => text.split(" ");



// console.log(splitES5("Hello World!"))
// console.log(splitES6("Hello World!"))




// // Object Literals

// let getProductES5 = function(id,name){
//     return {
//     "id" :id,
//     "name":name
// }
// }


// let getProductES6 = (id,name) => ( { "id":id,"name":name })


// console.log(getProductES5(10,"Ozan"))
// console.log(getProductES6(7,"Adil"))



//

// const phones = [
//     {name: "GalaxyS1",price:1500},
//     {name: "GalaxyS2",price:2500},
//     {name: "GalaxyS3",price:3500},
//     {name: "GalaxyS4",price:4500},
//     {name: "GalaxyS5",price:5500},
// ]


// //ES5

// let pricesES5 = phones.map(function(phone){
//     return phone.price
// })

// //ES6

// let pricesES6 = phones.map(phone => phone.price)


// console.log(pricesES6)
// console.log(pricesES5)


//! Filter


//ES5

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]


let evenES5 = arr.filter(function(number){
    return number%2 == 0
})


console.log(evenES5)


//ES6


let evenES6 = arr.filter(number => number%2 == 0)

console.log(evenES6)














// Call , Apply & Bind

// let welcome = function(){
//     console.log('Welcome '+ this.name)    
// }

// let person1 = {
//     name:"Ozan",
//     lastname:"Eski"
// }

// let person2 = {
//     name:"Emma",
//     lastname:"Stone"
// }

// If there is no parameter usage of apply and call are the same.

// welcome.call(person1)
// welcome.apply(person1)


// Bind -> connects them both and returns an another function.

// let WelcomeOzan = welcome.bind(person1)
// WelcomeOzan();
// let WelcomeStone = welcome.bind(person2)
// WelcomeStone();



// Apply - Call     


// let sayHi = function(a,b){
//     console.log("Hi, " + this.name + " are you interested learning " + a + " and " + b + " ?")
// }

// let adil = {
//     name: "Adil",
//     lastname: "Eski"
// }

// let ali = {
//     name: "Ali",
//     lastname: "Eski"
// }

// sayHi.call(adil,"javascript","react");

// sayHi.apply(adil,["javascript","react"]); //list


// After binding we can use put parameters inside of our new function. 
// let sayHiAli = sayHi.bind(ali)
// sayHiAli("python","django")



// Exercise 

let num = {
    min:20,
    max:88,
    checkRange: function(value){
        if (typeof value !== 'number') {
            return false;
        }
        else{
            return value >= this.min && value <= this.max;
        } 
    }
}

// console.log(num.checkRange(50))

num2 = {
    min:40,
    max:120
}

// console.log(num.checkRange.call(num2,66))

checkNum2 = num.checkRange.bind(num2);

console.log(checkNum2(121)) 










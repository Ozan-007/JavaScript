// Scopes

// ** Global Scope 'var'

var firstName="Ozan" //you can see it on under window.
// console.log(window)

// let getName = () => {
//     console.log(firstName)
// }

// getName() // it's reachable because it is inside of the global scope


// ** Local Scope
    // -> With ES6 let and const create block scope.
    // -> Functions create their own scopes.
    
    function getFullName() {
        let lastName = "Eski"
        console.log(firstName + " " + lastName)  
    } 

    getFullName();
    // console.log(lastName) // Could'nt reach out to lastName because it is inside of a function which makes it local and it is reachable only inside of the function.




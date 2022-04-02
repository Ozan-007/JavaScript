// Functions that Returns Functions

// According to our cases we can add and change our functions easily, they allow us to create functions faster and more efficient.

function Question(key) {
    
    switch (key) {
        case "car":
            return function(name){
                console.log(`${name}, Do you have a car?`)
            }    
        break;
    
        case "software":
            return function(name,language){
                console.log(`${name}, are you interested in learning ${language}?`)
            }
        case "book":
            return function(name){
                console.log(`${name}, What is your favourite book?`)
            }

        default:
            return function(name){
                console.log(`${name}, How are you?`)
            }
            break;
    }

}


let carQuestion = Question("car")
console.log(carQuestion)
carQuestion("Ozan")

let bookQuestion = Question("book")
console.log(bookQuestion)
bookQuestion("Sadik")

let softwareQuestion = Question("software")
console.log(softwareQuestion)
softwareQuestion("Burhan","python")


let defaultQuestion  = Question()
console.log(defaultQuestion)
defaultQuestion("Ozan")

//



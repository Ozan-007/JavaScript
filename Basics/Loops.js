// Loops

// for loops

// for(let i=0;i<10; i++){

//     if(i==7){
//         console.log("favourite number is 7")
//         continue
//   }
//     if(i==5){
//         console.log("I do not like 5")
//         break
//     }

//     console.log(i)
// }

// ************************************************

// while loops


// let i = 5;

// while(i<11){
//     console.log(i)
//     i++;
// }

// *******************************

// do-while loops

// let i = 3
// do {
//     console.log(i)
//     i++
// } while (i<2);


// let total = 0;

// for(let i=10;i>0;i--){
    
//     if(i%2==0){
//         total += i
//     }
// }
// console.log(total)


// *********************************


// Loops in Array & Objects

let cars = ['Bmw','Mercedes','Tesla']

// for(let i =0;i<cars.length;i++){
//     console.log(cars[i])
// }

// *****************

// for in 

// for(let i in cars){
//     console.log(`index ${i}, value: ${cars[i]}`)
// } 

// ****************

//forEach

// cars.forEach(element => {
//     console.log(element.length)
// });
//or

// cars.forEach(function (element) {
//     console.log(element)
// })


// *************** 

// Objects

// let people = [
//     {firstName: "Ozan", lastName:"Eski"},
//     {firstName: "Lebron", lastName:"James"},
//     {firstName: "Stephen", lastName:"Curry"}
// ]

// for(let i=0; i<people.length;i++){
//     console.log(people[i].lastName)
// }

// ***************************


// map :  return an array.

// cars.map(e => console.log(e.length)) //arrow function

// cars.map(function(element){ 
//     return console.log(element.length)
//  })

// let numbers = [1,2,3,4]

// console.log(numbers.map(number => number+4))


// **********************************

/* GUESSING GAME   

    get random numbers between 1-10 and try to find it with directions like above or below. Limit the guess limit with 3. Give scores to user.

*/

// let number = Math.floor(Math.random(1,10)*10)

// let point = 100
// let guess_limit = 5
// console.log(number)

// while (guess_limit>0) {
//     let guess = prompt("Enter a number: ")
//     if (guess > number){
//         guess_limit--;
//         console.log(guess_limit)
//         point = point-20;
//         console.log("Try lower")
//     } 
//     else if(number > guess){
//         guess_limit--;
//         console.log(guess_limit)
//         point -= point-20;
//         console.log("try higher")
//     }

//     else{
//         console.log(`Well done, number was ${number} `)
//         console.log(`Your score is ${point} `)
//         break
//     }
    
//     if(guess_limit == 0){
//         console.log('You have failed. Number was ' + number)
//         break
//     }
// }

































// document > html(root) allows us to use elements.

// let val;

// val = window.document; // with that we can see all of the elements
// val = document.all;

// val = document.head // Allows us to reach body.
// val = document.domain

// console.log(val)

// ******************************************************

// ** Selecting Single Elements --> document.getElementByID('')

// let val;
// val = document.getElementById('header')
// val.style.fontSize = '40px' 
// val.style.color = 'blue' 
// // val.style.fontWeight = 'bold'

// val.innerText = "Ozan's To-do App 🛒";
// val.innerHTML = "<b>Ozan's To-do App 🛒<b/>";

// console.log(val)

//---------------------- document.querySelector()

// document.querySelector("#header")
// document.querySelector(".header") // import part while using querselecyor is we need to use # and . for representing classes and ids.

console.log(document.querySelector('li').style.color = "red")
console.log(document.querySelector('li:last-child').style.color = "blue")
console.log(document.querySelector('li:nth-child(2)').style.color = "blue")

document.querySelector('li:nth-child(2)').textContent = 'Task Item'





// ** 


// LOCAL STORAGE


//setItem

let firstName = localStorage.setItem('firstName','Ozan')
let lastName = localStorage.setItem('lastName','Eski')
let hobbies = ["Basketball","Lifting","Software","Challenges"]

//getItem

// let val = localStorage.getItem('lastName')
// val = localStorage.getItem("firstName")

//remove Item

// localStorage.removeItem('lastName')



// set array to storage

localStorage.setItem('hobbies',JSON.stringify(hobbies))

let val = JSON.parse(localStorage.getItem('hobbies'))



console.log(val)
console.log(localStorage)

// SESSION STORAGE

let city = sessionStorage.setItem('city','Barcelona')
let hostel = sessionStorage.setItem('hostel','Eskis')

console.log(sessionStorage);

// Session storage is about the session if we close it we will not be able to see the values. But in Localstorage we can reach the values because it si local.

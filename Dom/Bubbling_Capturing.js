let todoApp = document.querySelector(".todo-app");
let todos = document.querySelector(".todos");
let input = document.querySelector(".addTask");
let form = document.querySelector(".form");
let deleteButton = document.querySelector(".delete");
let submitButton = document.querySelector(".submit");
let list = document.querySelector(".list-group");

// todoApp.addEventListener("click", (e) => {
//   console.log("todoApp");
// });
// todos.addEventListener("click", (e) => {
//   console.log("todos");
//   e.stopPropagation();
// });
// input.addEventListener("click", (e) => {
//   console.log("input");
// });
// form.addEventListener("click", (e) => {
//   console.log("form");
// });
// deleteButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("deleteButton");
// });
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("submitButton");
//   e.stopPropagation();
// });
  /* After all of this console.logs we will have all of the values because values are inside of each another
  
  Like if we click the submitButton the Console will return us this 
  
  SubmitButton
  form
  todoApp
  
  --> if we want to stop that we can use stopPropagation() so it will directly gives us the value. 
  
  */

// ******************************************************************

// Event Capturing

// **--> Change the order of the values with 'true' as third attribute of 'addEventListener'


// todoApp.addEventListener("click", (e) => {
//   console.log("todoApp");
//   e.stopPropagation();
// },true); //this will be first one if we add 'true' because it is the outsider and it includes others.

// list.addEventListener("click", (e) => {
//     if (e.target.className = "element") {
//         console.log(e.target.className)
//     }
//     e.stopPropagation();
// });


/* But now the difference here is that now the order has changed if we use stopPropagation 
the Console will only return the Outsider one. */

// todos.addEventListener("click", (e) => {
//     console.log("todos");
// },true);

// input.addEventListener("click", (e) => {
//   console.log("input");
// });

// form.addEventListener("click", (e) => {
//     console.log("form");
// });

// deleteButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("deleteButton");
// });

// submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("submitButton");
// });

// *******************************

// let elements = document.querySelectorAll('.element')

// elements.forEach(element => 
//     element.addEventListener("click", (e) => {
//         console.log(e.target.textContent)
//     })
//     )

// *********************************

// list.addEventListener("click", (e) => {
//     if (e.target.className = "element") {
//         // console.log(e.target.className)
//         console.log(e.target.parentElement)
//     }
//     e.stopPropagation();
// });


// Error Handling

//try-catch

// try{
//     console.log(myFunction())
// }
// catch(e){
// console.log(e);
// console.log(e.message);
// console.log(e.stack);
// console.log(e.name);
// console.log(e instanceof ReferenceError) // returns true.
// console.log(e instanceof TypeError) // returns false.
// console.log(typeof e) // returns false.
// }

//ReferenceError
//TypeError
//SyntaxError
//URIError

// let user = {
//     name:"Ozan Eski"
// }

// try {
//     if(!user.email){
//         throw new Error("User has no email.")
//         // throw new SyntaxError("User has no email.")
//     }
// } catch (error) {
//     console.log(error)
// }
// finally{
//     console.log("This is Error-Handling")
// }

// **Exercise

document.getElementById("submitBtn").addEventListener("click", function (e) {
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  let errors = document.getElementById("error");

  try {
    if (name.value.length === 0) {
      throw new Error("Name is required.");
    }
    if (name.value.length >= 20) {
      throw new Error(name.value + " is too long.");
    }
    if (age.value.length === 0) {
      throw new Error("Age value is required.");
    }
    if (isNaN(age.value)) {
      throw new Error("Age must be a numeric value.");
    }
  } catch (err) {
    errors.innerHTML = err;
    // console.log(name.value)
  }
  finally{
      name.value = "";
      age.value = '';
  }

  e.preventDefault();
  console.log("form is submitted.")
});
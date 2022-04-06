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
// Call Back Functions

// function MultipleByTwo(a,b,c){
//     let arr = [];
//     for(let i = 0;i < arguments.length;i++){
//         arr[i] = arguments[i]*2
//     }
//     return arr;
// }


// val = MultipleByTwo(1,2,3)

// function addOne(a){
//     return a+1;
// }

// for(let x=0;x<val.length;x++){
//     val[x] = addOne(val[x])

// }

// console.log(val)

//!! In the example above, We used 2 different functions and loops to change the values inside of an array. But we do not have to use 2 different for loops for that.



// addOne = (a) => { // this functions will be the callback function parameter.
//     return a+1
// }
// addTwo = (a) => {
//     return a+2
// }
// addThree = (a) => {
//     return a+3
// }

// function MultipleByTwo(a,b,c,callback){ // callback refers to the function that we want to use inside of the MultipleByTwo function.
//     let arr = [];
//     for(let i =0;i<3;i++){
//         arr[i] = callback(arguments[i] * 2)
//     }
//     return arr;
// }


// val = MultipleByTwo(1,2,3,addThree) 

// console.log(val)


//!! 3rd way is to define the function directly as a parameter.


function MultipleByTwo(a,b,c,callback) {
    let array = []
    for (let i = 0; i < arguments.length-1; i++) {
          array[i] = callback(arguments[i]*2);
    }
    return array;
    
}


addOne = (a) => {
    return a +1
}

values = MultipleByTwo(10,20,30,(a)=>{return a+2}); // added the function directly as a parameter.

console.log(values)










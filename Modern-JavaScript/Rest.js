// Rest Parameters

//*ES5 

function sumES5() {

    let arr = Array.prototype.slice.call(arguments)
    let result = 0;
    arr.forEach(function(a)
    { return  result+=a})
    console.log(result)
}

sumES5(10,20,30);


//*ES6 

function sumES6(...arr) {
    let newArr = [...arr]
    let result =  0
    newArr.forEach((a)=> result += a)
    console.log(result)
}

sumES6(10,20,30,40,50)
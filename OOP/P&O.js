//Primitives and Objects

// let num1 = 40;
// let num2 = num1;
// num1 = 50;

// console.log(num2)  //Num2 will return 40 in primitives two different place in the Stack.


// var obj1= {
//     name:"ozan",
//     age:22
// }

// let obj2 = obj1; 
// obj1.age=34 

// console.log(obj1) //Obj1 will return 34, in objects it refers to another address so if the address changes it effects the object.

// var account = {
//     name:"Adil",
//     account_number: 147852
// }

// var number = 50;

// function update(a,b){
//     a = 120;
//     b.account_number = 1111//in objects it's refers to the object so the value is updated.
// }

// update(number,account)
// console.log(account)// account_number has changed.
// console.log(number)//still 50



let personel = [
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500},
    {name:"Ozan",salary:2500}
]

function changeSalary(prsn){
    prsn.salary = 3500;
}

changeSalary(personel[0]);

console.log(personel)



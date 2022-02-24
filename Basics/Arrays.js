// // Arrays


// // let names = ["James", "Emily","Tom","Anna"]

// // let years = [2020, 2016,2012,2003]


// // Set array item

// // names[1] = "Kevin"

// // Add item

// // years.push(1986) // Adds as last item of the element.

// // years.unshift(1983) // Adds item to the start

// // remove item

// // years.pop() // removes the last item of the array.
// // years.shift() // removes the first element of an array.


// // reverse

// // names.reverse()


// //sort

// // years.sort();
// // names.sort();


// //concat

// // let value = years.concat(names) // Concates two arrays.


// //Splice

// // names.splice(2,0,"Ozan") // adds element to names[2] removes next 0 element , added name is "Ozan"


// // Find

// // function adult(year){
// //     let age = 2022 - year
// //     return age >=18

// // }

// // console.log(years.find(adult)) 

// // Filter

// // console.log(years.filter(adult))




// // console.log(value)
// // console.log(years)
// // console.log(names)
// // console.log(names.indexOf("Tom"))
// // console.log(names[1])
// // console.log(typeof names)


// // *************************************************

// // Create an array with "BMW,Mercedes,Opel,Mazda" elements in it.

// let cars = ["BMW","Mercedes", "Opel", "Mazda"]


// //How many elements does the array has?

// console.log(cars.length)


// // What are the first and last elements of the array?


// console.log(`First element ${cars[0]}, Last element ${cars[cars.length-1]}`)


// // Add renault to end of the array.

// cars.push('Renault')
// console.log(cars)


// // Add toyota to start of the array.

// cars.splice(0,0,"Toyota")   //cars.unshift("Toyota") shift removes unshift adds element to the start of the array
// console.log(cars)


// // Remove "Renault" from the array.

// cars.pop()
// console.log(cars)


// // Remove "Toyota" from the list.

// cars.shift()    //  or cars.splice(0,1)
// console.log(cars)


// // Reverse the element of the array.

// cars.reverse()
// console.log(cars)


// // Sort the elements of the array

// cars.sort()
// console.log(cars)


// // [1,2,5,24] sort this array.
// let arr = [1,2,50,7,24]
// console.log(arr.sort((a,b) => a-b))


// // Is "Opel" element of the Array?

// console.log(cars.includes("Opel"))
// console.log(cars.indexOf("Opel"))

// // ***************************************

// let str = "Chevrolet,Dacia"; //convert this string into an array.

// new_str = str.split(",")
// console.log(new_str) 


// // Concatenate the array with another array.

// new_arr = new_str.concat(cars)
// console.log(new_arr)


// // Delete the last two elements of the concatenated version.

// new_arr.splice(new_arr.length-2, 2)

// console.log(new_arr)


// // *****************************************************


// /* Put the elements inside of an array 

//         // student1: James Bond 2000
//         // student2: Brad Pitt 2000
//         // student3: Lebron James 2000
        
//         */
       
// //        let student1 = ['James',' Bond', 007]
// //        let student2 = ['Brad', 'Pitt', 7]
// //        let student3 = ['Lebron', 'James', 2007]

// // let arr_student = [student1,student2,student3]

// // console.log(arr_student[0][1])




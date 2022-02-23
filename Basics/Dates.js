// Part 1 : Dates & Times

// Date Object

// let date = new Date()

// let birthday = new Date(2020,2,3,5,30,14,35) //there will be a box when you typed '()' according to that we can create a new date.
// console.log(birthday)

// console.log(date.getFullYear() - birthday.getFullYear())
// console.log(date.getMonth() - birthday.getMonth())

// console.log(date)
// console.log(typeof date) returns object

//Set methods

// date.setFullYear(2032)
// date.setMonth(2) we have to add + 1 to find the exact month. Months start from 0 as January, 1 February...
// date.setDate(29)
// date.setHours(10)
// date.setMinutes(29)



//Get methods

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())


// Define Date


// let date_1 = new Date("2023/02/19 10:54:32")
// let date_2 = new Date(2025,04,28,46,12,06) // this return may 5th month. Because months start from 0 as January.

// console.log(date_1.getFullYear())
// console.log(date_2.getMonth()) 
// console.log(date_2)

// **************************************

// Before 1/1/1990 ??

// let date  = new Date('1/1/1990')
// let day = date.getDate()
// date.setDate(day-1)

// console.log(date)


// *******************************************


// Mothers day in 2032 ?? Every year Sunday second week of May

// let date = new Date()

// date.setFullYear(2032)
// date.setMonth(4)
// date.setDate(1)
// console.log(date.getDay()) // result is 6 so it means saturday we have to reach to sunday and then add + 7 to find the second weeks Sunday.

// while(date.getDay() != 0){
//     date.setDate(date.getDate()+1)
// }

// date.setDate(date.getDate()+7)

// console.log(date)










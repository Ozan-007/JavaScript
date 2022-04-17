//* Maps key:value pairs

let val;

let numbers = new Map();

numbers.set(1, "Ozan");
numbers.set(2, "Eski");
numbers.set(3, "is");
numbers.set(4, "the");
numbers.set(5, "one");

// console.log(numbers)

//? Map Prototype

// clear: ƒ clear()
// constructor: ƒ Map()
// delete: ƒ delete()
// entries: ƒ entries()
// forEach: ƒ forEach()
// get: ƒ ()
// has: ƒ has()
// keys: ƒ keys()
// set: ƒ ()
// size: (...)
// values: ƒ values()

// console.log(numbers.delete(1))
// console.log(numbers)

// for (const [b,a] of numbers) {
//     console.log(b + ' = ' + a )
// }

// numbers.forEach((key,value) => console.log( key + " = " + value ))

//* Merge Maps

let first = new Map([[1, "One"], [2, "Two"], [3, "Three"]]);


let second = new Map([[4,"Four"],[5,"Five"]])



let merged = new Map([...first,...second])

console.log(merged)
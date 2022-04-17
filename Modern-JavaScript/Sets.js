//* Sets (Collection Unique Value)

let val; 
var mySet = new Set()

// console.log(mySet)

//? Set Constructor

// add: ƒ add()
// clear: ƒ clear()
// constructor: ƒ Set()
// delete: ƒ delete()
// entries: ƒ entries()
// forEach: ƒ forEach()
// has: ƒ has()
// keys: ƒ values()
// size: (...)
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.toStringTag): "Set"
// get size: ƒ size()

mySet.add(2)
mySet.add(3)
mySet.add("I'm the One")
mySet.add({"Tool": "React","years":2})

// console.log(mySet)

// val = mySet.has("I'm the One")

// console.log(val)

// console.log(mySet.keys())
// console.log(mySet.values())

// for (const value of mySet.keys()) {
//     console.log(value)
// }

// for (const item of mySet) {
//     console.log(item)
// }

// for (let [key,value] of mySet.entries()) {
//     console.log(key,value)
// }



// console.log(Array.from(mySet))


let secondSet = new Set([1,2,3,4])


// console.log(secondSet)

// let combined = new Set([...mySet,...secondSet])

// console.log(combined)


//? Intersection

// let intersec = new Set(Array.from(mySet).filter((item) => secondSet.has(item)))

// console.log(intersec)



//? Difference

// let difference = new Set(Array.from(mySet).filter((item) => !secondSet.has(item))) 
// let difference = new Set([...mySet].filter((item) => !secondSet.has(item))) 

// console.log(difference)


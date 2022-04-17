//* Arrays protoype

//? at: ƒ at()
//? concat: ƒ concat()
//? constructor: ƒ Array()
//? copyWithin: ƒ copyWithin()
//? entries: ƒ entries()
//? every: ƒ every()
//? fill: ƒ fill()
//? filter: ƒ filter()
//? find: ƒ find()
//? findIndex: ƒ findIndex()
//? findLast: ƒ findLast()
//? findLastIndex: ƒ findLastIndex()
//? flat: ƒ flat()
//? flatMap: ƒ flatMap()
//? forEach: ƒ forEach()
//? includes: ƒ includes()
//? indexOf: ƒ indexOf()
//? join: ƒ join()
//? keys: ƒ keys()
//? lastIndexOf: ƒ lastIndexOf()
//? length: 0
//? map: ƒ map()
//? pop: ƒ pop()
//? push: ƒ push()
//? reduce: ƒ reduce()
//? reduceRight: ƒ reduceRight()
//? reverse: ƒ reverse()
//? shift: ƒ shift()
//? slice: ƒ slice()
//? some: ƒ some()
//? sort: ƒ sort()
//? splice: ƒ splice()
//? toLocaleString: ƒ toLocaleString()
//? toString: ƒ toString()
//? unshift: ƒ unshift()
//? values: ƒ values()


const boxes = document.querySelectorAll('.box')

// Array.from(boxes).forEach((box) => box.style.backgroundColor = "purple")

// console.log(boxes)

// for (let box of boxes) {
//     if (box.className == 'box red') {
//         continue
//     }
//     box.style.backgroundColor = 'purple'
//     box.textContent = "I'm changed"
// }

//*from 

// let arr = Array.from("I'm the best.")

// console.log(arr)

const products = [
    {name:'SamsungS8', price: 5000},
    {name:'SamsungS9', price: 6000},
    {name:'SamsungS7', price: 4000}
]    
// products.forEach((prd) => console.log(prd))

// console.log(Array.from(products,prd => prd.name == "SamsungS9"))

// console.log(products.find(prd => prd.name == "SamsungS8")) // returns object


// console.log(products.filter(prd  => prd.name == "SamsungS7")) // returns an array with name == "SamsungS7"


// console.log(products.findIndex(prd => prd.price == 5000 )) // Finds the index of the specific element


let letters = ["a","b","c"];

entries  = letters.entries();

console.log(entries)

for (const i of entries) {
    console.log(i)
}


let keys = letters.keys()

for (const x of keys) {
    console.log(x)
}









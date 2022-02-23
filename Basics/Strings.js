// Strings

let val;
const firstName = "Ozan"
const lastName ="Eski"


//string concatenation

    // val = firstName + " " + lastName + ", I've been coding for 2 years."

// ***************************************

// String concat
    val = firstName.concat(" "+ lastName)

    // console.log(val.length)

// ***************************************

// String toUppercase - toLowercase

    val = val.toUpperCase();
    // val = val.toLowerCase();

    // val = val.indexOf('e');
    // val = val[0]
// ***************************************

// substring

    // val = val.substring(0,9);  

// ******************************************


// slice

    // val = val.slice(5)

// ******************************************


// String replace 

    // val = val.replace("E","O")
    // val = val.replace("OZAN","ADIL")


// ******************************************

// trim
//      val = "  "+val+ " " 
//      val = val.trim()

// console.log(typeof val)
// console.log(val)

// *******************************************


let sentence = "  This is a file for working on string in JavaScript. - Ozan Eski  "


// How many characters does the sentence has ?

    // console.log(sentence.length) 

// How many letters does the sentence has ?

    // console.log(sentence.trim().split(" ").length)

// Convert all letters to lowercase ?

    // console.log(sentence.toLowerCase())

// Remove the spaces from beginning and the end of the sentence. 

    // console.log(sentence.trim())

// Delete '-' character.

    // console.log(sentence.replace("-",""))


// Remove "This is a " part

    // console.log(sentence.substr(12))
    // console.log(sentence.slice(sentence.indexOf("f")))


// Check if there is 'Ozan' in the sentence

    // console.log(sentence.indexOf("Ozan"))


// Replace all "a" 's with "o"'s

    // console.log(sentence.replace(/a/g, "o"))



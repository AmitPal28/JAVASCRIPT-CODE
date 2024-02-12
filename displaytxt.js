// Display screen in your output
console.log("Amit-Pal")


// Three type of variable initialization: var, let, const

const userId = 123  // can't change it values
let userName = "Amit Pal"
userEmail = "amitkrec@gmail.com"  // By default set as an var variable initialized
var userCity = "Kanpur" 
/* 
  Prefer not to use  var (because of issue in block and fn scope)
*/


console.table([userName, userEmail, userCity]) // Create a table using variable

"use strict"; // treat all JS code as never version


/* Data-type (Primtive)

 // number => 2 to pwr of 53
 // bigint
 //  string => ""
 // boolean => true/false
 // null => standalone value
 // undefined => not initaize in a variable only defined
 // symbol => unique


*/


// for knowing the type of given var use : typeof var_name.


// Typecasting from one datatype to another

let phoneNum = "6306323980"
let userAdd
let initialScore = null
let pwd = "avvf432"

phoneNum =  Number(phoneNum)
userAdd = Number(userAdd)
initialScore = Number(initialScore)
pwd = Number(pwd)

console.log(`After conversion phoneNumber: ${typeof phoneNum}`)
console.log(phoneNum)

console.log(typeof userAdd)
console.log(userAdd)

console.log(typeof initialScore)
console.log(initialScore)

console.log(typeof pwd)
console.log(pwd)

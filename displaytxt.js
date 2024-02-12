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


console.table([userId,userName, userEmail, userCity]) // Create a table using variable

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
console.log(`Before conversion phoneNumber: ${typeof phoneNum}`)
let userAdd
console.log(`Before conversion userAdd: ${typeof userAdd}`)
let initialScore = null
console.log(`Before conversion initialScore:${typeof initialScore}`)
let pwd = "avvf432"
console.log(`Before conversion pwd:${typeof pwd}`)

phoneNum =  Number(phoneNum)
userAdd = Number(userAdd)
initialScore = Number(initialScore)
pwd = Number(pwd)

console.log(`After conversion phoneNumber: ${typeof phoneNum}`)
console.log(phoneNum)

console.log(`After conversion userAdd: ${typeof userAdd}`)
console.log(userAdd)

console.log(`After conversion initialScore:${typeof initialScore}`)
console.log(initialScore)

console.log(`After conversion pwd:${typeof pwd}`)
console.log(pwd)
 

let user1 = ""
console.log(`Before conversion user1: ${typeof user1}`)
user1 = Boolean(user1)
console.log(`After conversion user1: ${typeof user1}`)
console.log(user1) 

let user2 = "Shivam"
console.log(`Before conversion user2: ${typeof user2}`)
user2 = Boolean(user2)
console.log(`After conversion user2: ${typeof user2}`)
console.log(user2) 




let a //undefined. 
let b = null
const arr = [1,4,7,8]

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof arr)



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


// ************************************ DataType ******************************************************************
 

/*
Note1: (Primtive datatype having 7 types consists us and they are store in stack memory.)  

 // number => 2 to pwr of 53
 // bigint
 //  string => ""
 // boolean => true/false
 // null => standalone value
 // undefined => not initaize in a variable only defined
 // symbol => unique

Note2: (Non-Primitive or Reference Datatype such as Array, Object and Function and they are stored in heap memory.)
*/

let stdUniversityRollNo  = 1873613004
console.log(`Student University Roll Number of type is: ${typeof stdUniversityRollNo}`)
console.log(`Student University Roll Number is: ${stdUniversityRollNo}`)

let stdKPressKey = 1234567898765432234567885432n
console.log(`Student type keyboard unnessary key of type is: ${typeof stdKPressKey}`)
console.log(`Student type keyboard unnessary key is: ${stdKPressKey}`)

let stdName = "Akash kumar"
console.log(`Student Name of type is: ${typeof stdName}`)
console.log(`Student Name is: ${stdName}`)

let stdDob = null
console.log(`Student Date-of-birth of type is: ${typeof stdDob}`)
console.log(`Student Date-of-birth is: ${stdDob}`)



// for knowing the type of given var use : typeof var_name.


// Typecasting from one datatype to another datatype

let phoneNum = "6306323980"
console.log(`Before conversion phoneNumber: ${typeof phoneNum}`)
phoneNum =  Number(phoneNum)
console.log(`After conversion phoneNumber: ${typeof phoneNum}`)
console.log(`Student phone Number is: ${phoneNum}`)

let userAdd //undefined
console.log(`Before conversion userAdd: ${typeof userAdd}`)
userAdd = Number(userAdd)
console.log(`After conversion userAdd: ${typeof userAdd}`)
console.log(`Student-add is: ${userAdd}`)

let initialScore = null
console.log(`Before conversion initialScore:${typeof initialScore}`)
initialScore = Number(initialScore)
console.log(`After conversion initialScore:${typeof initialScore}`)
console.log(`Student-IT initaialScore is: ${initialScore}`)

let pwd = "avvf432"
console.log(`Before conversion pwd:${typeof pwd}`)
pwd = Number(pwd)
console.log(`After conversion pwd:${typeof pwd}`)
console.log(`Student Password is: ${pwd}`)
 

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




let amount //undefined. 
console.log(`Student Amount type is: ${typeof(amount)}`)
let vacancy = null
console.log(`Student Vacancy type is: ${typeof(vacancy)}`)
const score = [32,36,45]
console.log(`Student Score type is: ${typeof score}`)


// Note3: shallow-copy create for primitive datatype because it has copy of original file
let rameshInterest = "Python-lang"
let sureshInterest = rameshInterest
rameshInterest = "Javascript"

console.log(`RameshInterest Now is: ${rameshInterest}`)
console.log(`SureshInterest Now is: ${sureshInterest}`) 

// Note4: Deep-copy create for un-primitive datatype because it have reference of original file.
const firstStd ={
   email: "abc@gmail.com",
   gender: "Male"
}
const secondStd = firstStd

firstStd.email = "xbc@yahoo.com"

console.log(`Second Student gender is:${secondStd.email}`)
console.log(`First Student email is: ${firstStd.email}`)
// *************************** OPERATORS ******************************************

// Arithmetic (+,-,*,/,%,**)


// Concatination implement only in string

let firstName = "Amit"
let lastName = " Pal"

let fullName = firstName + lastName
console.log(`Your fullname is : ${fullName}`)


console.log( 1 + "2")
console.log( '1'+2)
//According to precedence rule
console.log("1"+2+3)
console.log(1+2+"3")

console.log(+true)
console.log(+"")


// Comparison  (>,<,>=,<=,==,!= )

// If you take 2 datatype one of string and one of number then string automatic converts into number.
  console.log( '2' == 2)
// Exception:  null >= 0  -> "true" 
// === Strict Type : It is different for equal operator because of it is also check datatype.
 console.log( '2' === 2)



const firstUserId = Symbol('343466')
const secondUserId = Symbol('343466')

console.log( firstUserId === secondUserId)





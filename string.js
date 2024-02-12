//********************************************** String ********************************************************************** */


const userName = new String('Amitpal') // This statement shows String-Object

console.log(`UserName is: ${userName}`)
console.log(`Type of UserName is: ${typeof(userName)}`)

console.log(userName)
console.log(userName.__proto__) // Note1: In node output show {} but in case of browser console having multiple prototype chaining are present
console.log(userName[0])

console.log(`UserName string length is: ${userName.length}`)
console.log(`UserName converts into uppercase is: ${userName.toUpperCase()}`)
console.log(`UserName for particular index value is: ${userName.charAt(4)}`)
console.log(`UserName for particular value having indexes is:${userName.indexOf('p')}`)

const fName = userName.substring(0, 4) // Note2: In Substring method obey negative index and last one index are excluding.
console.log(`User firstName is: ${fName}`)

const someName = userName.slice(-8,2)
console.log(`User someName is${someName}`)

const whitespaceRemove = "    Ram   "
console.log(`Before removing space is: ${whitespaceRemove}`)
console.log(`After removing space is: ${whitespaceRemove.trim()}`)

const url = 'https://amitkrec@gmail.com/amitpal28'
console.log(url.replace('28',''))
console.log(url.includes('amitkrec'))


const userFullName = "Fateh~Bahadur~Singh~Pal"
console.log(`UserFullName is: ${userFullName.split('~')}`) // String Converts into list through this method.



// *************************************************** Number **************************************************************************

/*
const userBill = new Number(565) // Number Object

console.log(userBill.toFixed(2)) // take for how many exact place decimal value
console.log(userBill.toString().length)

const accountBalance = 2434.65428
console.log(accountBalance.toPrecision(3)) // (priority before decimal value and return a string) 

const accountBalance1 = 34.65428
console.log(accountBalance1.toPrecision(3))

const accountBalance2 = 434.65428
console.log(accountBalance2.toPrecision(3))


const userSalary = 300000000
console.log(userSalary.toLocaleString('en-US')) //  Set value in US-standard-Representation
console.log(userSalary.toLocaleString('en-IN')) // By default Set as an Indian-standard-Representation 

*/

// ******************************************************* Math  *******************************************************************

/*
console.log(Math)

console.log(Math.round(6.78))
console.log(Math.floor(6.78))
console.log(Math.ceil(6.78))
console.log(Math.min(5,7,65,12,4))
console.log(Math.max(5,7,65,12,4))


console.log(Math.random()) // This statement state that value lies b/w (0-1) decimal also include
console.log(Math.random()*10) // This statement state that value lies b/w (0-9) decimal also include
console.log(Math.floor(Math.random()*10)) // This statement state that value lies b/w (0-9) decimal not include

console.log(Math.floor(Math.random()*10)+1) // This statement state that value lies b/w (1-9) decimal not include


// Inside This range value lies on it.
const minValue = 5
const maxValue = 15

console.log(`Value lies on particular range ${minValue} and ${maxValue} is: ${Math.floor(Math.random()* ( maxValue- minValue+ 1 ))+ minValue}`)

*/






// ****************************************************************** Date ******************************************************************************


/*
let userDate = new Date() // Create a Date-object

console.log(userDate)
console.log(typeof userDate)

console.log(userDate.getFullYear())
console.log(userDate.getMonth())
console.log(userDate.getDate())
console.log(userDate.getDay())


console.log(userDate.toString()) // India Standard Time
console.log(userDate.toDateString()) // Day Month date year
console.log(userDate.toLocaleString()) // date/month/year, time 
userDate.toLocaleString('default',{
    weekday: "long"
})



let createDate = new Date(2024, 1, 29)
console.log(createDate.toDateString())

let anotherCreateDate = new Date(2024, 1, 13, 2, 30)
console.log(anotherCreateDate.toLocaleString())
anotherCreateDate = new Date("02-13-2024") // mm-dd-yy
console.log(anotherCreateDate.toLocaleString())

let yourTimeStamp = Date.now()
console.log(yourTimeStamp)
console.log(anotherCreateDate.getTime())

console.log(Date.now()) // Present time in milisecond
console.log(Date.now()/1000)  // Converts into milisecond to second
console.log(Math.floor(Date.now()/1000)) 

*/
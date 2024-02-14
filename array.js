// **************************************** Array ***************************************************************
const userArray = [2,54,63,12]
// console.log(`Your userarray is: ${userArray}`)
// console.log(`Your userArray of type is: ${typeof userArray}`)
const userNewArray = new Array(1,2,3,4)
// console.log(`Your usernewarray is: ${userNewArray}`)




// ******************************************Some Object ************************************************


const useArray = [2,4,6]
useArray.push(8)  // Add last index element
// console.log(`After applying push method of useArray is: ${useArray}`)
useArray.unshift(0) // Add first index element
// console.log(`After applying unshift method of useArray is: ${useArray}`)
useArray.pop() // Remove last index element
// console.log(`After applying pop method of useArray is: ${useArray}`)
useArray.shift() // Remove first index element
// console.log(`After applying shift method of useArray is: ${useArray}`)

console.log(useArray.includes(4)) // This statement return this value are exist or not in a given array.
console.log(useArray.indexOf(4)) // indexof method inside parameter are exist on which index in a given array

const conStrArray = useArray.join()
// console.log(`convertstringArray of type is: ${typeof conStrArray}`)

// Concept of slice and splice
 
/*

Similarity of both methods are not include last index
Difference: slice method  after implementing are not change in original array 
but in case of splice method after implementing original array should not contain that index range elements which are takes splice method

*/

const newArrayOne = userArray.slice(0,3)
console.log(`Your newArrayOne of value is:${newArrayOne}`)
console.log(`Your userarray is: ${userArray}`)

const newArrayTwo = userArray.splice(0,2)
console.log(`Your newArrayTwo of value is:${newArrayTwo}`)
console.log(`Your userarray is: ${userArray}`)


const fruitList =  ["Apple",'Banana','Carrot','Papaya']
const priceList =  [80, 60, 120, 40]
fruitList.push(priceList)
console.log(`Now,fruitListvalue is: ${fruitList}`)

const fruitItems = fruitList.concat(priceList)
console.log(fruitItems)

// Spread Operator
const purchaseFruitItem = [...fruitList, ...priceList]
console.log(purchaseFruitItem)

const nextedList = [10,11,12,[2,4,6],[0,[1,3,5,7],-1]]
const openNextedList = nextedList.flat(Infinity)
console.log(`openNextedList display now: ${openNextedList}`)

console.log(Array.isArray("Amit"))
console.log(Array.from("Amit"))// Array Converts into string-form
console.log(Array.from({name:"Amit"})) // Interesting Case

let placedStudIT = 50
let placedStudCivil = 12
let placedStudME = 24
console.log(Array.of(placedStudIT,placedStudCivil,placedStudME))
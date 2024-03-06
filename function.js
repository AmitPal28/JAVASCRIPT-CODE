function display(){
    const userName = "Amit-Pal"
    return `Hello, ${userName} `; 
}

console.log(display)
console.log(display())

// function Declaration
function sum(num1,num2){
    const add = num1 + num2
    // return
    return add;
}
let result = sum(20,3)
console.log(`The addition of two numbers is: ${result}`)

// Case of Using Default Parameter  
function operation(num1,num2){
    num1 = num1 === undefined ? 1 : num1;
    num2 = num2 === undefined ? 1 : num2;

    const product = num1 * num2
    return product;
}

result =operation(4)
console.log(`The operation of two numbers is: ${result}`)


// variable scope:
/*
 Incase of variable-scope variable like var,const are not access by inside a function 
 but if you declare a variable outside then it can be access. 
 */
const fileName = "mypic.jpg"
function download(){   
    console.log(`Your file name is: ${fileName}`);
}

download();


//function expression  state that if you have function but not having named it just stored in a variable.
// function expression is also named as anonormous function

const logIn = function (){
    console.log('Logged In')

}
logIn();


// Callback function

function formatText(txt, fncCB){
    return typeof fncCB === 'function'? fncCB(txt): txt.toUpperCase();
}

const ot = formatText('amit', function(txt){
    return txt.charAt(0).toUpperCase() + txt.slice(1);
})
console.log(ot)



// IIFE(Immediately Invoked Function expression)

// (function() {
//     console.log("Settled Up!");
// })();




// Arrow function
const getSum = (num1,num2) => num1+num2;
console.log(`Arrow fn implement is: ${getSum(2,4)}`)


// Good Practise of function should be noted that:
// function name should be descriptive.
// One function should have one work 


// Asynchronous JS state that it will stop async function but rest of synchronous fn are still working.
// Example: DOM Manipulation, add-Event listener 
// Asynchronous JS has three components are: CallStack , WebAPI and Callback-Queue.
// If callStack is busy or unempty then callbackqueue can't be push on callStack through event loop.

console.log("Start")

setTimeout(()=>{
    console.log("This is a set-time-out fn")
},1000)

console.log("End")




// Concepts of Callback and Promise

/*
function register(cb){
setTimeout(()=>{
    console.log('Are you Registered?')
    cb();
},1000); 
}

function email(cb){
setTimeout(()=>{
    console.log('Your entered E-mail!')
    cb();
},2000);
}

function login(cb){
setTimeout(()=>{
    console.log('User login')
    cb();
},7000);
}

function getPage(cb){
setTimeout(()=>{
    console.log('Go to the Page.')
    cb();
},3000);
}

function uploadPage(){
setTimeout(()=>{
    console.log('Upload data Now.')
},1000);
}

// This is nexted function or callback hell stage 

register(function(){
    email(function(){
        login(function(){
            getPage(function(){
                uploadPage();
            }); 
        });        
    });
});
*/


// Using Promise use through then() inplace of callback fn

function register(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            // return reject("Error user registration");
            console.log('Are you Registered?')
             resolve();    
        },1000); 
    });    
   
    }
    
    function email(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('Your entered E-mail!')
             resolve();    
        },2000);
    });
    
    }
    
    function login(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            return reject('Incorrect ceredential try it again !..')
            console.log('User login')
            //  resolve();    
        },7000);   
    });

    }
   
    
    function getPage(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('Go to the Page.')     
             resolve();    
        },3000);
    });
   
    }
    
    function uploadPage(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('Upload data Now.')
            resolve();
        },1000);
    });
   
    }
/*
register()
  .then(email)
  .then(login)
  .then(getPage)
  .then(uploadPage)
  // .catch((err)=>console.log(err));
*/


// For better approach for promise is async-await use in a fn due to more readable code easily understandable.
async function authicate(){
    try{
        await register();
        await email();
        await login();
        await getPage();
        await uploadPage();
    } catch(error){
        console.log(error);
        throw new Error();
    }

}

authicate()
        .then(()=>console.log("User Dashboard showing user details ceredential"))
        .catch((err)=>console.log(err)); 

console.log('After converting sync to async fn')



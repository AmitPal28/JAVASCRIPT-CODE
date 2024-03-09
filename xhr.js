
function myAxios(method,url, body = null){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url); // start a server 
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type','application/json');
        
        xhr.onload = () =>{ if(xhr.status >=400) {
                reject(xhr.response);
                console.log("Failed!..")
            }else{ resolve(xhr.response)} // show data in manually for getting data from fakeapi we can use onload
        }
        xhr.onerror = () => {
            reject(xhr.response);
            console.log("Error..")
        } 
        
        xhr.send(JSON.stringify(body));
    })
   
}
const url = "https://jsonplaceholder.typicode.com/users";

// myAxios('GET',url);

myAxios('POST', url, {
    name: "Amit",
    work: "Job-seeker"
}).then((res)=> console.log(res)).catch((err)=> console.log(err));

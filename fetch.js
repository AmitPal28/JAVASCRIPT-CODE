
const url = "https://jsonplaceholder.typicode.com/users";
function myAxios(method,url, body = null){
    const headers = {
     'Content-Type': "application/json",
    }
    return fetch(url,{
        method: method,
        headers: headers,
        body: JSON.stringify(body)

    }).then((res)=>res.json());   //readable stream  converts into json format
  
}

// myAxios('GET',url).then((res)=> {console.log(res)}).catch((err) =>{console.log(err)})


myAxios('POST',url,{name: "Shivam", work: "Py-Django-Dev"}).then((res)=> {console.log(res)}).catch((err) =>{console.log(err)})

function getData (API){
    const Link = 'https://jsonplaceholder.typicode.com/users'
    
    return new Promise((resolve,reject)=>{
       fetch(Link).then((response)=>{
        if(response.status >= 200 && response.status < 300){
            const Maindata = response.json()
        
            resolve(Maindata)
        }else{
            reject(new Error("Your NetWork Are to Week"))
        }
       }).catch((error)=>{
            reject(error)
       })
    })
}
getData().then((Data)=>{
    console.log(Data);
}).catch(error =>{
    console.log(error);
})
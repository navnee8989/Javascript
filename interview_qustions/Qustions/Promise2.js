const showBooks = ()=>{
    let combinePromise
    const firstPromise = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve ("Ayurvedic Books")
            
        }),2000
    })
    
    const firstPromise22 = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve ("Ayurvedic Books")

        }),2000
    })
    
    const firstPromise3 = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve ("Ayurvedic Books")
            
        }),2000
    })
    return  combinePromise = Promise.all([firstPromise,firstPromise22,firstPromise3])
}




async function  display (){
    const ReadBook = await showBooks();
    console.log(ReadBook);
}
display();
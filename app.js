const slide = document.querySelectorAll('.image')
console.log(slide);
 let count = 0;

slide.forEach((img,index) => {
    img.style.left = `${index * 100}%`
});

slidewshow = () => {
    slide.forEach((img) =>{
        img.style.transform = `translateX(${count * 100}%)`
        console.log("translate done");
        console.log(count);
    })
}

const next = () =>{
  
  
   if (count >= 0) {
    return count = -8;
 
    console.log(count.value);
   }
   else{
    
        count++;
    
   }
   slidewshow();
}

const pre = () =>{ 
 
  
   if (count == -8) {
    return count = 0;
  
   }
   else{
        count--;
    
   }
   slidewshow();
}
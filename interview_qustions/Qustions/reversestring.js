// method 1

// const a = "hello my name is navneet sondarva"
// const b = a.split(" ").map(item => item.split('').reverse().join(''))
// console.log(b.join(""));


// method 2

function Reverse(param){
   return param.split("").reverse().join("")
}


let a = "navneet"
let b = Reverse(a)
console.log(b);
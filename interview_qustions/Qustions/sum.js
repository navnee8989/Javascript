const array = [1,2,3,4,5,6,7,8,9]

// method one
let sum = 0;
// const Addition = array.forEach(item => sum = sum + item)
// console.log(sum);


// method two

// for(let i = 0; i < array.length; i++ ){
//     sum = sum + array[i]
// }

// console.log(sum);

// method three

const Addtion = array.reduce((accumuletor,currantvalue,index) => accumuletor + index , 0)
console.log(Addtion);
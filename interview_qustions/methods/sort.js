const {users} = require('./array')


const age = users.map(users => users.age)


const checkAge = (a,b)=>{
    return a - b 
}
const sortedAge = age.slice().sort(checkAge)
console.log(sortedAge);

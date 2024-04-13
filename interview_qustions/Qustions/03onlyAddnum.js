/** @format */

const list = ['navneet', 345, 'heelo', 789, 'bhuro', 7657];

let sum = 0;

// list.forEach(element => {
//     if( typeof element === "number"){
//         sum = sum + element
//     }
// })
const filterNumbers = [];
const numbers = list.filter((item)=>{
	if(typeof item === "number"){
		filterNumbers.push(item)
	}
	return filterNumbers;
})
console.log(filterNumbers);
const Addition = filterNumbers.reduce(
	(accumuletor, currentindex, index) => accumuletor + currentindex,
	0,
);
console.log(Addition);

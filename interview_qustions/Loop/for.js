// loops are used to perform task in multiple times

// object with  normal for loop

const navneet = {
	name: 'navneet',
	age: 23,
	study: 'frontend developer',
};

const values = []

for (const key of navneet) {
    if (Object.hasOwnProperty(key)) {
        const value = object[key];
        console.log(key,value);
    }
}

// const itrateobject = Object.entries(object);

// for (let i = 0; i < itrateobject.length; i++) {
// 	const [key, value] = itrateobject[i];
// 	console.log(key, value);
// }

// array with normal for loop

// const array = ['navneet', 23, 'frontend developer'];


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }




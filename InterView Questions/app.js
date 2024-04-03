/** @format */

const array = [10, 20, 30, 40, 50];
function Sum(para) {
    var sum = 0;
    for(let i = 0; i < para.length; i++){
        sum += para[i]
    }
    return sum;
	
}
console.log(Sum(array));
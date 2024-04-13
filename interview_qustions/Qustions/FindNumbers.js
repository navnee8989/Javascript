var arr=[10,20,30,35,40,50,60];


const filtredData = []
for(let i = 0; i <= arr.length; i++){
    if(arr[i] > 30 && arr[i] < 40){
        filtredData.push(arr[i])
    }
}

console.log(filtredData);
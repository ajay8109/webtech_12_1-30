//move all zeros to end of the array 

let arr = [0,1,0,3,12,0,4,2,5]

let arr1 = [];
let count = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
        arr1.push(arr[i]);
    }
    else {
       count++;
    }
}
for(let i = 0; i < count; i++){
    arr1.push(0);
}
console.log(arr1);
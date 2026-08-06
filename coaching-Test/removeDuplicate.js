// remove duplicate elements from an array

let arr = [1,2,3,2,4,1,2,5]
let arr1 =[];


for(let i =0; i < arr.length; i++){
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

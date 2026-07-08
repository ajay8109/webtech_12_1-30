// let arr = [10,25,7,5,8,30];


// let largest = arr[0];

// for(let i = 0; i < arr.length; i++){
//      if(arr[i] > largest){
//         largest = arr[i];
//      }
// }
// console.log(largest);


let arr = [10,25,7,5,8,30];

let largest = -Infinity;
let secondLargest = -Infinity;


for(let i = 0; i < arr.length; i++){
    if(arr[i]> largest){  // 10 > infinity
        secondLargest = largest // secondlargest = -infinity
        largest = arr[i] // largest = 10
    }else if(arr[i] > secondLargest && arr[i] !== largest){ //
        secondLargest = arr[i];
    }

}
console.log(secondLargest);


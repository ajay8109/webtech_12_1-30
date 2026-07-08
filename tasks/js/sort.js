let arr = [5,2,1,4,7]
let temp = 0;


for(let i =0; i < arr.length-1; i++){
    for(let j =0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j +1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);


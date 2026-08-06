// find the occurance of Each element in the array;

let arr = [1,2,3,2,4,1,2,5];

for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }
    console.log(arr[i] + " occurs " + count + " times");
}
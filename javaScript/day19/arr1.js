let arr = [0,1,1,0,0,1,1,0]

let zero = 0;
let one = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i]===0){
        zero++;
    }
    else{
        one++
    }
}

for(let i = 0; i < zero; i++){
      arr[i] = 0;
}

for(let i = zero; i < arr.length; i++){
    arr[i] = 1;
}
console.log(arr);


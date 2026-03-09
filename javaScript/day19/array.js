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
let result = [];
for(let i = 0; i < zero; i++){
      result.push(0)
}
for(let i = 0; i < one; i++){
    result.push(1);
}
console.log(result)
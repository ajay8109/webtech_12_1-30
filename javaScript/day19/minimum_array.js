//find the minimum element

let arr = [5,2,3,1,8,10]

let min = arr[0]

for(let i = 1; i < arr.length; i++){
    if(arr[i]<min)
        min = arr[i]
}
console.log(min);
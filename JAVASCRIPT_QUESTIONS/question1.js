//write a program to merge an [1,2,3,5,[12, 15, 18 ,25], 10,5]

let arr = [1,2,3,5,[12, 15, 18 ,25, "indore", 'A'], 10,5]
let result = [];

function mergeArray(arr){
    for (let item  of arr) {
        if(Array.isArray(item)){
            mergeArray(item)
        }
        else {
            result.push(item);
        }
    }
}

mergeArray(arr);
console.log(result)

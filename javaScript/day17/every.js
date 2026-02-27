// it will return the boolean value based on the condition

let arr1 = [1,2,3,4,5,6,7,8]
let every1 = arr1.every((item)=>{
    return item % 2 == 0;
})
console.log(every1);
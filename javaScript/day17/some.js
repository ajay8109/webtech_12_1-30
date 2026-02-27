// the some will return boolean value based on condition 

let arr1 = [1,2,3,4,5,6,,7,8]
let some1 = arr1.some((item)=>{
    return item % 2 == 0;
})
console.log(some1);
// filter is used to filter the value based on the condition


let arr1 = [1,2,3,4,5,6,7,8,9,10]
let filter1 = arr1.filter((item)=>{
    return item % 2 == 0;
})
console.log(filter1);
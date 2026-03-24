// the rest operator is used to concatate to two or more array or object;


let arr = [1,2,3,4,5];
let arr1 = [6,7,8,9,10]


let newArr = [...arr, ...arr1];

console.log(newArr);


let obj1 = {
    name : "ajay",
    age : 23
}

let obj2 = {
    address : "indore",
    contact : 1231231231
}


let newObj = {...obj1, ...obj2};

console.log(newObj);
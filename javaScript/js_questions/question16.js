// merge this arrayv without flat method

let arr = [1,2, ['hy', 'by', ['indore',1000], 1000, 2000]];

let result = [];


function mergeArr(arr1){
    if(Array.isArray(arr1)){
        arr1.forEach( v=> mergeArr(v))
    }else{
        result.push(arr1)
    }
}


mergeArr(arr);
console.log(result);

// write a program to check a number is armstrong number or not number is 153;

// let num = 153;
// let original = num;
// armStrong = 0;

// while(num>0){
//     let digit = num % 10;
//     armStrong = armStrong + digit * digit * digit;
//     num = Math.floor(num/10);
// }
// if(armStrong == original){
//     console.log("armStrong");
// }else{
//     console.log("not armStrong");
// }

// console.log(armStrong)



//    

// let arr = [1, 2, ['hy', 'by', ['indore', 1000], 1000, 2000]];


// let arr1 = [];

//  function mergeArray(array){
//     for(item of array){
//         if(Array.isArray(item)){
//             mergeArray(item)
//     } else {
//          arr1.push(item)
//     }
// }}

// mergeArray(arr)

// console.log(arr1)



let s1 = "debugshala";


let arr = s1.split("");
for(let i = 0; i < arr.length; i++){
   let count = 0;
   for(j = 0; j < arr.length; j++){
     if(arr[i]===arr[j] && i > j)  {
        break
     }
     if(arr[i]===arr[j]){
        count++;
     }
    }
    if(count > 0) {
        console.log(arr[i] + " occures = " + count);
    }
}
 
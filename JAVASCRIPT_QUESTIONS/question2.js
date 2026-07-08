//write to program to reverse a String 

let str = "ajay";
let rev = "";

for(let i= str.length-1; i >= 0; i--){
   rev = rev + str[i];
} 
console.log(rev);
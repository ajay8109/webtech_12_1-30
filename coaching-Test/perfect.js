// write a program to check the number is perfect number is not the number 7;

let num = 7; 
let sum = 0;

for ( let i = 0; i < num; i++){
    if(num % i === 0) {
        sum = sum + i
    }
}
if(sum === num) {
    console.log("The number " + num + " is a perfect number ")
}
else {
    console.log("The number " + num + " is not perfect number");
}





//write a program to reverse a number where number is 1234

let num = 9750256;
let revrse = 0;

while(num>0){
    let digit = num % 10;
    revrse = (revrse*10) + digit;
    num = Math.floor(num/10);
}
console.log(revrse);
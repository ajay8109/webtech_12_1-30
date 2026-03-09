// find the largest number in a given number using a while loop . input number  = 45732

let num = 45732
let largest = 0;


while(num>0){
    let digit = num % 10;
    if(digit > largest){
        largest = digit;
    }
    num = Math.floor(num/10);
    
}
console.log(largest);
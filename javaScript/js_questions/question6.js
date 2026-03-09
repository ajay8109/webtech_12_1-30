// square of all digit and sum of this and display the number 34567

let num = 34567
let sum = 0
let sqr = 1;

while(num>0){
    let digit = num % 10;
     sqr = digit * digit;
    num = Math.floor(num/10);
    sum = sum + sqr;

}
console.log(sum);
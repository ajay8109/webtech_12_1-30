//count the number of digits in a number using a while loop. input number = 34543

let num = 34543;
 let count = 0;

while(num>0){
    let digit = num % 10;
    count++;
    num = Math.floor(num/10);

}
console.log(count);
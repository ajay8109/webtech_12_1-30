// extract digit from the number 6789

let num = 6789
let result = 0;

while(num>0){
    let digit = num % 10;
    result = result + digit;
    num = Math.floor(num/10);

}
console.log(result);


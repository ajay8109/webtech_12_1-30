// write a program to check a number is armstrong number or not number is 153;

let num = 153;
let original = num;
armStrong = 0;

while(num>0){
    let digit = num % 10;
    armStrong = armStrong + digit * digit * digit;
    num = Math.floor(num/10);
}
if(armStrong == original){
    console.log("armStrong");
}else{
    console.log("not armStrong");
}
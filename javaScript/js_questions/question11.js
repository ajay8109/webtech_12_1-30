//write a program to check a number is palindrome

let num = 121;
let original = num;
let palindrom = 0;

while(num>0){
    let digit = num % 10;
     palindrom = (palindrom * 10) + digit;
    num = Math.floor(num/10);
}
if(palindrom == original){
    console.log("the number " + original + " is a palindrome");
}else{
    console.log("the number " + origrinal + " is not a palindrome");
}

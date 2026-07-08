//Q.2  check the number is palindrome or not


let num = 121
let original = num;
palindrom = 0;


while(original> 0){
      let digit = original % 10;
      palindrom = (palindrom * 10) + digit;
      original = Math.floor(original/10);
}

if(num === palindrom){
    console.log("the number " + num + " is a palindrome number ");
}
else{
    console.log("not a palindrome number");
}

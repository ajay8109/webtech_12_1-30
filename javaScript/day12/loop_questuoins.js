// question no 1. swapping two numbers

// let a = 10;
// let b = 20;

// let c = a;
//     a = b;
//     b = c;

//     console.log(a);
//     console.log(b);

//------------------------------------------------------------------------//

//question no 2. fibonacci series

// let a = 0;
// let b = 1;

// for(let i = 0; i <= 9; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c
// }

//---------------------------------------------------------------------//

// question no 3.  leap year question

// for( let year = 2000; year <= 2025; year++){
//     if(year % 4 == 0 || year % 400 == 0 && year % 100 != 0){
//         console.log( year + " is a leap year");
//     }
//     else{
//         console.log(year + " is not a Leap year");
//     }
// }

//----------------------------------------------------------//

// question no 4. arm strong number

// let number = 235;
// let num = number;
// let sum = 0;

// while(number > 0) {
//     let digit = number%10;
//     sum = sum + digit * digit * digit; check(di)
//     number = Math.floor(digit/10);
// }

// if(num == sum){
//     console.log(num + " is a armstrong number");
// }
// else{
//     console.log(num + " is not a armstrong number");
// }


// -------------------------------------------------------------//

// question no 5. Strong number



// let number = 145;
// let num = number;
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;

//     let fact = 1;
//     let i = 1;

//     while (i <= digit) {
//         fact = fact * i;
//         i++;
//     }

//     sum = sum + fact;
//     number = Math.floor(number / 10);
// }

// console.log(sum == num ? "Strong Number" : "Not a Strong Number");



// Strong number using function


// strongNumber(145)



// function strongNumber(number){

// // let number = 145;
// let num = number;
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;

//     let fact = 1;
//     let i = 1;

//     while (i <= digit) {
//         fact = fact * i;
//         i++;
//     }

//     sum = sum + fact;
//     number = Math.floor(number / 10);
// }

// console.log(sum == num ? "Strong Number" : "Not a Strong Number");

// } 


// for(let i = 1; i <= 50; i++){
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// //question 4. print all the odd numbers between 1 and 100;

// for(let i = 1; i <= 100; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// question 5. print all the number 1 to 200 that are divisible by both 3 and 5

for(let i = 1; i <= 200; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i)
    }
}

// question 6. calculate the product of all even numbers between 1 and n using a for loop where n







// question no 7. calcutlate the sum of the digits of a numberb using for loop, where n is provided by thev user


let sum = 0;

for(i = 1; i <= 50; i++) {
    sum = sum + i;
}
console.log(sum)


// question no 8. prime number// , 3, 5, 7, 11, 13, 17
  
let num = 153;
let original = num;
let sum1 = 0;

while(num > 0){
    let digit = num % 10;
    sum1 = sum1 + digit * digit * digit;
    num = (num - digit) / 10;
}
console.log(sum1)

// math.floor is used to avoid decimal values


// let num1 = 456;
// let sum2 = 0;

// while(num1 > 0) {
//     let digit = num1 % 10;
//     sum2 = sum2 + digit;
//     num1 = Math.floor(num1 / 10);
// }
// console.log(sum2)

let number = 121;
let palindrom = 0;

while(number > 0) {
    let digit = number % 10;
    palindrom =  palindrom * 10 + digit;
    number = number - digit / 10
}
console.log(palindrom)






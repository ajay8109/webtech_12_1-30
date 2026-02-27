// function test(a){
//     a1 = a;
// }
// let x = 10;
// test(x)
// console.log(x);
// console.log(a1);

// // write a program to swap two  numbers without using a third variable

 

// let a = 10;
// let b = 20;

// a = a + b;  // 30
// b = a - b;  // 10
// a = a - b;  // 20

// console.log(a);
// console.log(b);



// // write a program to if the numbur is even or odd

// let number = 10;

// if(num % 2 == 0) {
//     console.log(number +  " is even number");
// } else {
//     console.log(number + " is a odd number");
// }

// write a  program to find the largest of three numbers

// let x = 10;
// let y = 20;
// let z = 30;

// if(x >= y && x >= z){
//     console.log(x + " is greatest number")
// }else if(y >= x && y >= z){
//     console.log(y + " is greatest number");
// }
// else{
//     console.log(z + " is greatest number");
// }




// write a function to find the factorial  of a number

// factorial(5)

// function factorial(num){
//     let fact = 1;
//     for(i = 1; i <= num; i++){
//        fact = fact * i;
//     }
//     console.log(fact);
// }


// write a function to create a fibonacci series


//  fibonacci(9);

// function fibonacci(num){

    
// let a = 0, b = 1;

// console.log(a);  

// for (let i = 1; i < num; i++) {
//   console.log(b);          
//   let next = a + b;        
//   a = b;                   
//   b = next;       
// }
// }


// for loop patterns


// let num = 1;

//  for(let i =1; i <= 4; i++){
//     let row = " ";

//     for(let j =1; j <= i; j++){
//         row = row + num + " ";
//         num++;
//     }
//     console.log(row);
//  }


 // alphabate pattern
 
//  for(let i = 1; i <= 4; i++){
//     let row = " ";
//     let charCode = 97;

//     for(let j = 1; j <= i; j++){
//         row = row + String.fromCharCode(charCode ) + " ";
//         charCode++;
//     }
//     console.log(row);
//  }

 // question starr pettern

//   let n = 5;

//   for(let i = 1; i <= 5; i++){
//     let row = " ";

//     for(let space = 1; space <= i; space++){
//    row = row + " ";
//     }

//     for(let j = i; j <= n; j++){
//         row = row + "*"
//     }
//     console.log(row);
//   }
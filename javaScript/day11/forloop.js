// count the number of the digits in a number using a while loop. input number 34543


// let number = 34543;
// let count = 0;


// while(number > 0){
//     count++;
//  number = Math.floor(number / 10);
// }
// console.log(count)


// perfect number // 6 -> 1 + 2 + 3 = 6 


// let number = 6;
// let perfect =  0;
// let i = 1;

// while(i < number) {
//     if(number % i == 0)
//        perfect = perfect + i;
//     i++; 
// }
// console.log(perfect);

// let num = 20;
 
// for(let i = 2; i <= num; i++) {
//     if(num % i != 0 || i % i == 0  ){
//         console.log(i);
//     } 
// }


// count++;
//     }
// }let num = 4;
// let count = 0;

// for(let i = 2; i <= num; i++){
//     if(num % i == 0){
//         

// if(count == 1) {
//     console.log("prime number")
// }
// else {
//     console.log("not a prime number");
// }

// perfect number 28;

// let number = 28;
// let perfect = 0;

// let i = 1;

// while(i < number) {

//     if(number % i == 0) {
//         perfect = perfect + i;
//     }
//     i++;

// }
// console.log(perfect);

// let number = 50;
// let count = 0;

// for(let i = 2; i <= number; i++){
//     if(number % i == 0){
//         count++;
//     }
    
// }

// if(count == 1) {
//     console.log("prime number");
// }



        



 

// let i = 1;

// while(i <= 50 ){
//        let number = 28;
// let perfect = 0;

// let i = 1;

// while(i < number) {

//     if(number % i == 0) {
//         perfect = perfect + i;
//     }
//     i++;
// }
 
// }

 
// 

for(let num = 1; num <= 50; num++) {

    let sum = 0;

    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            sum = sum + i;
        }
    }

    if(sum == num) {
        console.log(num);
    }

}

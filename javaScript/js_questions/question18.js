// write a program to check whether a given string is a palindrome
// input "madam"



// let name = "madam";
// let palindrome = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     palindrome = palindrome + name[i];
    
// }
// console.log(palindrome);

// if(name == palindrome) {
//     console.log("Yes, the String is palindrome");
// }



// Check the number is prime or not the number is 7;



// let num = 7;

// if (num <= 1) {
//     console.log("not prime");
// } else {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log("prime");
//     } else {
//         console.log("not prime");
//     }
// }
     

// write a program of the string Reverse without inbuilt methods, where string is "city indore " 



// let city = "city ";
// let output = "";
// let city1 = "indore"
// let output1 = "";

// for( let i = city.length-1; i >=0; i--) {
//     output = output + city[i];
     
// }
// for(let i = city1.length-1; i >= 0; i--) {
//     output1 = output1 + city1[i];
// }
// console.log(output + " " + output1);



// check the year is leap year 


function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It is a leap year");
  } else {
    console.log("Not a leap year");
  }
}

leapYear(2024)
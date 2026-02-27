//comparison operators are comapre values ==, ===
// == it will compare only values
//=== it will compare both values and datatypes


//example

let a = 20;
let b = '20';

console.log(a==b); // it will print true
console.log(a===b); // it will compare both values and datatypes and will print false


//  relational operators it will compare condtion on both the operands[>, < , <= , >=]

//example 

let x = 20;
let y = 30;
 console.log(x > y)// it will print false because condition is false
 console.log(x < y)// it will print true because condition is true
 console.log(x >= y) // it will print false because condition is false x is nor greater niether equal to
 console.log(x <= y) // it will print true because the condtion is true it is greater


 // logical operator [AND, OR , NOT]
 // AND op it will compare to condition both will true then the answer will true
 // OR op any one condtion should be true
 // NOT will give opposite answer if (10!=10) the will false because 10 = 10 it give in opposite


 let l = 10;
 let m = 20;
 let n = 10;

 //AND op

 console.log(l > m &&  l == n) // it print false because both the condtion are not true

 // OR 

 console.log(l > m || l == n)// it will print true because any one condition should be true

 // NOT

 console.log(l != n) // it will print false because the condition is the condition is true
 console.log(l != m) // it will print true because the condtition is true
 

// question 1. Declare three variable (name, age , city) and print them

   const name = 'ajay';
   let age = 23;
   let city = 'indore';

   console.log(name, age, city);

// question 2. store two number in variable and print their sum


   let a = 10;
   let b = 20;

   let sum = a + b;
    console.log(sum);


// question 3. store length and width in a variable and calculate the area of the rectangle


 let length = 4;
 let width = 10;

 let area = length * width ;

 console.log(area);


 // question 4. Store radius in a variable the area of the circle

 let r = 10;

 let  area1 = r * r;

 console.log(area1);

 // questrion 5. Store a nubmer in a variable  and check whether it is even or odd

   let num = 10;

   if(num % 2 == 0){
    console.log('the ' + num + ' is even');
   }
   else{
    console.log('the' + num + 'is odd');
   }

  
 // question 6. Declare variables using,let and const and print thier values.
 
 let num1 = 10;
 var num2 = 20;
 const num3 = 30;

 console.log( 'num1 ' + num1);
 console.log('num2 ' + num2);
 console.log( 'num3 ' +num3);

 // question 7. Store marks of 5 subject in a variables andv calculate the total and average.

 let maths = 60;
 let biology = 70;
 let english = 80;
 let hindi = 75;
 let physics = 85;

 let total = maths + biology + english + hindi + physics;

 let average = total / 5;

 console.log('Total marks ' + '= ' + total);
 console.log('Average of all subject ' + '= ' + average);

 // question 8. Store a salary in a variable and calculate a 10% bonus.

 let salary = 25000;

 let bonus = salary / 100 * 10;

 console.log('The bonus of the salary is ' + bonus);

 // question 9. Store a number in a variable and find its square and cube.


 let number = 5;
  
let sqr = number * number;
let cube = number * number * number;

console.log('The square of the ' + number + ' is' + ' = ' + sqr);
console.log('The cube of the ' + number + ' is' + ' = ' + cube);


// question 10. Store two numbers in a variable and find the grater number.

let num_1 = 10;
let num_2 = 20;

if(num_1 > num_2){
   console.log(num_1 + ' is greater');
}
else{
   console.log(num_2 + ' is greater')
}

// question 11. Store a price in a variable and apply 18% GST;

let price = 700;

let gst = price / 100 * 18;

let total_price = price + gst;

console.log('The total price after 18% gst ' + ' = ' + total_price);


// question 12. store two variables and perform all arithmetic operation (+,-,*,/,%);


let _num1 = 30;
let _num2 = 10;

console.log(_num1 + _num2);
console.log(_num1 - _num2);
console.log(_num1 * _num2);
console.log(_num1 / _num2);
console.log(_num1 % _num2);
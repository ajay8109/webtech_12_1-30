// There are two types of datatypes in js 

//1. primitive data types

//1. number  store the all numbers values
//2. string   store the string a character value or set of character ex- any name
//3.boolean   it stores value true or fales
//4. null 
//5. undefined


//1. number example

let a = 10; 
console.log(a);
console.log(typeof(a))


//2. string example 
     // string can be written in three ways 1. - '' single codes
                                           // 2. - " " double codes
                                           // 3. - " " backtics
                                           
   let name = 'ajay';
   console.log(name);
   console.log(typeof(name));
   
   
   // using single code and double you cant write set of string or multiline String


   // let name2 = " my
   //                name
   //                 is 
   //               ajay"   it will show error in double code and single codes you cant write multiline string



   //3. boolean it will wirte only true false;
   
   let que = true;
   console.log(que);
   console.log(typeof(que));

   //4. null means no value when you declare a variable and assign it null it will show you null value

   let c = null;
   console.log(c)
   console.log(typeof(c));


   //5. undefined means when we declare a variable and not assign anything it will show undefine

   let d;
   console.log(d)
   console.log(typeof(d));


   // 2. non primitive datatypes that are not predefined they are user defined


   // 1. array it storesc same or different type of values or we can say set of same and different types values


   let arr = ['ajay', 'vijay', 1, 2, true]

   console.log(arr)
   console.log(typeof(arr));

   //2. object it will store the data in the form of key and value or pair of key values
   // or it will represent the data of the object

   let obj = {
         name: 'ajay',
         age : 20
   }

   console.log(obj);


   //3. function A function is block of code or set of code which perform a specific given tasks it is resuable

   function demo() {
        console.log('ajay');
   }
   demo();


   
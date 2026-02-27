// hoisting javaScript calling the fucntion before decleration;


// in the case of var variable

// console.log(a);
// var a = 10;  // is will show undefined because varibaled a is created but not initialized



// in case of let and const;

// console.log(a);
// let a = 10; // it will show reference error because of temporal dead zone you can not acces the variable before initialiaztion 
//           // means the varibale has created but you can not acces


// for both let and cosnt it will show refefence error;



//-----------------------------------------------------------------------------------------------------//

// in the case of function hoisting is possible only with fucntion declaration
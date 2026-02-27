// Nested function means function inside the function 

// syntax 
// function funName(d) {
//
//    console.log(d)
//   function funname(d1){
//       console.log(d1)
//                      }
//      child function calling :- funname(2)
//
//         }
// funname(5)


//exampple :-

function parent(a){
  console.log(a);
     function child(b){
        console.log(b)
     }
     child(20)
}
parent(10);
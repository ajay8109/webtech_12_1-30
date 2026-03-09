// let obj = {
//   a: 10,
//   b: 20
// };

// let x = obj;

// x = { a: 100 };

// console.log(obj.a);


// let obj = {
//   a: 10
// };

// function change(o){
//   o.a = 50;
// }

// change(obj);

// console.log(obj.a);



// let obj = {
//   a: 10
// };

// function change(o){
//   o = { a: 100 };
// }

// change(obj);

// console.log(obj.a);



// let obj = {
//   a: 10,
//   b: 20
// };

// let x = obj;
// let y = x;

// y.b = 100;

// console.log(obj.b);



// let obj = {
//   a: 10
// };

// let x = obj;

// x.a = 20;
// x = null;

// console.log(obj.a);



//-----
// let obj = {
//   a: 10,
//   b: function(){
//     function test(){
//       return this.a;
//     }
//     return test();
//   }
// };

// console.log(obj.b());



//
// let obj = {
//   a: 10,
//   b: () => {
//     return this.a;
//   }
// };

// console.log(obj.b());



// let obj = {
//   a: 10,
//   b: function(){
//     return () => this.a;
//   }
// };

// let f = obj.b();

// console.log(f());



// let obj = {
//   a: 10,
//   b: function(){
//     console.log(this.a);
//   }
// };

// let f = obj.b;

// f();
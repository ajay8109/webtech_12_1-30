 function orderPlaced(){
    return new Promise((resolve, reject)=>{
        
            resolve("order palced");
        
    })
 }

 function orderPrepairing(){
      return new Promise((resolve,rejcet)=>{
        
            resolve("order is prepairing");
        
      })
 }

 function orderDelevired(){
    return new Promise((resolve, reject) => {
        
            resolve("order delivered");
        
    })
 }

 orderPlaced()
 .then((msg) => {
    console.log(msg);
    return orderPrepairing();
 })
 .then((msg) => {
    console.log(msg);
    return orderDelevired();
 })
 .then((msg) => {
    console.log(msg)
 })
 .catch((err) =>{
    console.log(err);
 })
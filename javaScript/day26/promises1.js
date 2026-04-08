function placeOrder(){
  return new Promise((resolve , reject) =>{
    setTimeout(() =>{
          resolve("order placed")
    },2000)
  })
}


function prepareFood(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
          resolve("food is being prepared")
        },3000)
    })
}

function deliverFood(){
    return new Promise((resolve , reject) =>{
        resolve("food delieverd")
    },2000)
}



placeOrder()
    .then((msg) => {
        console.log(msg);
        return prepareFood();
    })
    .then((msg) => {
        console.log(msg);
        return deliverFood();
    })
    .then((msg) => {
        console.log(msg);
        console.log("🎉 Order Completed!");
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });
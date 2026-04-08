let x = 10;
let a = 20;


try {
     x += a;
     console.log(x)
} catch (error) {
    console.log(error);
}finally{
    console.log("connection lost");
}
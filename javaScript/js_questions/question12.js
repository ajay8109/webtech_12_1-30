// check number 6 is perfect number or not using the for loop;

let num = 6;
perfect = 0;

for(let i = 1; i < num; i++){
     if(num % i == 0){
       perfect = perfect + i;
    }
}

if(num == perfect){
    console.log("the number " + num + " is a perfect number");
}else {
    console.log("the number " + num + " is not a perfect number");
}

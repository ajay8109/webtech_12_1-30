// wrtie a program to find the prime between 1 to 50;

for(let i = 2; i <= 50; i++){
    let isPrime = true;
    for(let j = 2; j <= i; j++){
        if(i % j === 0){
            isPrime = false;
            break;
        }
         }
         if(isPrime){
            console.log(i);
         }
}

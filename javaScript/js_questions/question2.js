strongNumber(145);



 function strongNumber(number){
      let num = number;
      let sum = 0;
      let digit = 0;
      
    while(number > 0){
        digit = number % 10;
        let i = 1;
        let fact = 1;
        while(i <= digit){
          fact = fact * i;
          i++;
        }
        number = Math.floor(number / 10);
        sum = sum + fact;
    }
    if(sum == num){
        console.log("Strong number");
    }
    else{
        console.log("Not a Strong number");
    }
      

 }  
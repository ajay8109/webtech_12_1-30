 const fs = require("fs")

 //syn 

 fs.writeFileSync("./test.txt", "my city name is indore")



 //async


 fs.writeFile("./test1.txt", "debugshala", (err, data) => {
     if(err){
        console.log(err);
     } 
 });
 console.log("file  written succesfully")

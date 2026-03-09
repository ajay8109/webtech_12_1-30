let s1 = "debugshala";

let arr = s1.split("");
for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){


        if(arr[i]===arr[j] && i>j){
            break;
        }
        if(arr[i]===arr[j]){
            count++
        }
    }
     if(count > 0){
        console.log(arr[i] + " occures = " + count);
     }
}
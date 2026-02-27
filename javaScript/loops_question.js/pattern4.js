//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *
  

    let space = 5;
    let star = 0;

    for(let i = 1; i <= 10; i++){
        let row = " ";
        // space--;
        // star = star + 1 ;

        for(let j = 1; j <= space; j++){
            row = row + " "
        }
        for(let j = 1; j <= star; j++){
            row = row + " *"
        }
        if(i >= 6){
            space = space + 1;
            star--;    
        } else {
            space--;
           star = star + 1;
        }
        console.log(row);
    }


    //     *
    //    * * 
    //   * * * 
    //  * * * * 
    // * * * * *
  

    let space = 5;
    let star = 0;

    for(let i = 1; i <= 5; i++){
        let row = " ";
        space--;
        star = star + 1 ;

        for(let j = 1; j <= space; j++){
            row = row + " "
        }
        for(let j = 1; j <= star; j++){
            row = row + " *"
        }
        
        console.log(row);
    }

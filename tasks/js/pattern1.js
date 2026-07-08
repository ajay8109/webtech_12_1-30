// let star = 0;
// let space = 5;

// for(let i = 1; i <= 5; i++){
//     space--;
//     star++;

//     let row = "";

//     for(let j = 1; j <= space; j++){
//         row = row + " ";
//     }

//     for(let j = 1; j <= star; j++){
//         row = row + " *";
//     }

//     console.log(row);
// }


let space = 5;
let star = 0;

for(let i = 1; i <= 5; i++){
    space--;
    star++;
    let row = "";

    for(let j = 1; j <=space; j++){
        row = row + " ";
    }

    for(let j = 1; j<=star; j++ ){
        row = row + " *";
    }
    console.log(row);
}


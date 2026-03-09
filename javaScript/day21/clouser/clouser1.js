function parent(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const counter = parent();
counter();
counter();
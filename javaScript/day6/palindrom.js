

let number = 121;
let palindrom = 0;

while(number > 0) {
    let digit = number % 10;
    palindrom =  palindrom * 10 + digit;
    number = number - digit / 10
}
console.log(palindrom)

//typeCasting

//implicit typeCasting 

console.log(10 + '10') // the output will be a String 1010 it will concatinate both number and String

console.log(10-'10') // the output will be 0 it will convert '10' String into number automatically

console.log(10 * '10') // the output will be 100 because it will convert String into number

// implicit when will the concate operator(+) the String will converted to nu number automatically


console.log(10 - 'a') // output will be NaN not a number because  it will covert String into number but 'a' string has no value so it will prunt not a number

console.log(10 + 'a') // the output will be String (10a) because it will convert it into a String

//explicit typecasting

console.log(10 + Number('10')) // it will convert String into a number because we explicitly defined that convert it into number it will concate 
console.log(10 + String(100)) // it will convert into String because we definrd explicitly

console.log(Boolean(1))
console.log(Boolean(0))

console.log(String(1))

console.log(Number(false))

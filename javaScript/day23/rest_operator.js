// Rest operator is used when:

// ✔ number of arguments is unknown
// ✔ we want to collect remaining values
// ✔ we want flexible functions



function add(...number){
  return number.reduce((total, num) => {
     return total + num },0)
}

console.log(add(1,2,3,4,5,6,7,8,9));


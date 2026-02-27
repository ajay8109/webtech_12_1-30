//find the total sum using reduce

let prices = [100, 200, 300]
let reduce1 = prices.reduce((total, value)=>{
        return total + value;
},0)
console.log(reduce1);
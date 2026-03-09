const Person = [
    {id : 1, name : "jay"},
    {id : 2, name : "jayesh"},
    {id : 3, name : "raja"}
]
const result = Person.findIndex((p) => p.name === "jayesh");
console.log(result);
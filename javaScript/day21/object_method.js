let Person = {
    name : "Ajay",
    age : 23,
    address : "Indore"
}

//keys

console.log(Object.keys(Person));
console.log(Object.values(Person));
console.log(Object.entries(Person));

console.log(Person.hasOwnProperty("name"));


//Object.freeze(Person);
Person.age = 30;
console.log(Person);
Person.DOB = "01-01-2003";
console.log(Person)

//assign

const updatePerson = Object.assign({},Person, {age: 30});
console.log(updatePerson);
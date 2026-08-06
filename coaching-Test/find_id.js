//find the  anme of the student whose id = 3

let students = [
    {id:1, name:"ram", address:"indore"},
    {id:2, name:"shyam", address:"bhopal"},
    {id:3, name:"kanha", address:"rau"},
    
]

let student1 = students.map((s) => {
    if(s.id === 3){
        console.log(s.name);
    }
})

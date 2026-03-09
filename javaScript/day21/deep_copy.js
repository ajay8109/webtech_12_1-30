//A deep copy copies all levels of the object, including nested objects.



//So changing the copied object does not affect the original.


let obj1 = {
    name : "ajay",
    address : {
        city : "indore",
        contact : {
            phone : 568475839
        }
    }
}

const obj2 = JSON.parse(JSON.stringify(obj1))// deep copying

obj2.address.contact.phone = 29438483
console.log(obj1.address.city);
console.log(obj1.address.contact.phone); //the obj1 one copied in obj2 but obj2 cant affect the original value of obj1 by the chanigin in obj2
console.log(obj2.address.contact.phone);


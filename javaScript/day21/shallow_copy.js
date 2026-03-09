//A shallow copy copies only the first level of an object.
//If the object has nested objects, they are not copied, only their reference is copied.

//So both objects will point to the same inner object.


let obj1 = {
    name : "ajay",
    address : {
         city : "Indore"
    }
}

let obj2 = {...obj1}

obj2.address.city = "bhopal";

console.log(obj1.address.city);
import React, { useState } from 'react'

function ControlledTask() {

   const [formData , setFormData]= useState({
     name1 : "", 
     email : "",
     password : "",
     address : ""
   });

   const [color, setColor]=useState("")
      const [message, setMessage]=useState("")


   const handleChange = (e) =>{
      const {name , value}  = e.target;
      setFormData({...formData , [name]:value})
   }

   const handleSubmit= (e) =>{
        const {name1, email, password, address}= formData;
 
        if(!name1 || !email || !password || !address){
            setMessage("please fill are the field")
            setColor("Red")
        }else if(!email.includes('@')){
            setMessage("Invalid Email");
            setColor("green")
        }else{
            setMessage("Registration Sucessfully")
            setColor("yellow")
        }
        
        setFormData({name1:"",email:"",password:"",address:""})
        console.log(formData);
   }

  return (
    <>
    <form onSubmit={handleSubmit}>
      Name : <input type="text" placeholder='Enter Name' name='name1' value={formData.name1} onChange={handleChange}/> <br />
      Email : <input type="email" placeholder='john@gmail.com' name='email' value={formData.email} onChange={handleChange}/> <br />
      Password : <input type="password" placeholder='Enter Password' name='password' value={formData.password} onChange={handleChange}/> <br />
      Address : <input type="text" placeholder='Enter Address' name='address'  value={formData.address} onChange={handleChange}/> <br />
      <button type='submit'>Submit</button>
    </form>
    
    </>
  )
}

export default ControlledTask
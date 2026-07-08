import React, { useState } from 'react'

const Controlled = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState(0)

     function handleChange(e){
        e.preventDefault();

        const formData = {
            Name : name,
            Email : email,
            Address : address,
            Phone : phone
        }

        localStorage.setItem("userData", JSON.stringify(formData));



     }


  return (
    <form onSubmit={handleChange}>
    <input type="text"  value={name}  onChange={(e) => setName(e.target.value)}/> <br /> 
    <br />
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
    <br />
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> <br />
    <br />
    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
    <br /> 
    <button type='submit'>submit</button>

    </form>
    
  )
}

export default Controlled
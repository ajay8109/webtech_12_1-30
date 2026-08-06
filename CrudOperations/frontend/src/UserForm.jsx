import React from 'react'
import { useState } from 'react'
import { createUser } from './api/userApi';


const UserForm = ({refresh}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
       await createUser({ 
        name,
         email,
          password,
           address,
            phone:Number(phone)
         });
         refresh();
    }
    catch (error) {
        console.log("Error during data add",error)
    }
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhone("");
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input type="text" className="form-input" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-input" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input type="password" className="form-input" placeholder="Create a secure password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Address</label>
        <input type="text" className="form-input" placeholder="City, Country" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <input type="text" className="form-input" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Create User</button>
    </form>
  )
}

export default UserForm
import React, { useState } from 'react'

const Regex_Example = () => {
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleCghane = (e) => {
      e.preventDefault();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

      if(!emailRegex.test(email)){
        setMessage(`invalid email`)
        return
      }

      if(!passwordRegex.test(password)){
        setMessage(`invalid password`)
        return
      }
       
      const userData = {email , password}
      localStorage.setItem(`users`, JSON.stringify(userData));
      setMessage("users data saved to localStorage");

      setEmail("");
      setPassword("");

    }
    


  return (
    <>
    <h1>login form</h1>
    <form onSubmit={handleCghane}>
    <input type="text" placeholder='enter your emial' value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button type='Submit'>submit</button>
   

    </form>
    
        <p>{message}</p>
    </>
    
  )
}

export default Regex_Example
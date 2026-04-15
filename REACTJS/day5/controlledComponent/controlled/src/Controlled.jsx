import React, { useState } from 'react'

const Controlled = () => {

    const [name, setName] = useState("");
    const [pass, setPass] =  useState("")

    function handleChange(e){
        const capName = e.target.value.toUpperCase()
        setName(capName);

    }

    function handlePass(e){
     const lowPass = e.target.value.toLowerCase();
     setPass(lowPass)
    }
  return (
    <>
    <form action="">
        <label htmlFor="">firtName</label>
        <input type="text"  onChange={handleChange}/>
        <label htmlFor="">lastName</label>
        <input type="text"  onChange={handlePass}/>
    </form>
     
    </>
  )
}

export default Controlled
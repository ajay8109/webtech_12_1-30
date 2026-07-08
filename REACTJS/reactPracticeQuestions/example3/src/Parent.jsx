import React, { useState } from 'react'
import Child from './Child';


const Parent = () => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    function submit(e){
        e.preventDefault();
        console.log("Name" , name);
        console.log("COlor", color)
        


    }
  return (
    <>
    <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
    <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
    <button onClick={submit}>submit</button>

    <Child  name={name} color={color}/>
   </> 

  )
}

export default Parent



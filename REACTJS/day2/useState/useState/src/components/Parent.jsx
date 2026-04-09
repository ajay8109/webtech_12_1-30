import React, { useState } from 'react'
import Child from './Child'


const Parent = () => {

  const [name1, setName1] = useState(" ")
  

    function handleChange(event){
    setName1(event.target.value)
    }

    const [color1, setColor1] = useState(" ")

    function handleChange1(e){
        setColor1(e.target.value)
    }
  return (
    <>
       <input type="text"  value={name1} onChange={handleChange}/>
       <input type="text" value={color1} onChange={handleChange1} />
       

       <Child name ={name1} color ={color1} />
    </>
  )
}

export default Parent
import React, { useEffect, useState } from 'react'
import UseEffectChild2 from './UseEffectChild2'

const UseEffect2 = () => {
    const [data, setData] = useState([])
    

    
useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts ")
     .then((response) => response.json())
     .then((data) => {
        setData(data);
     })
 
   },[])
       
      

  return (

    <>
    
      <UseEffectChild2  data1 = {data}/>
    </>
   

    
  )
}

export default UseEffect2
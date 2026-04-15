import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEffect1 = () => {
   const [data, setData] = useState([]);
   
   useEffect(() => {
     fetch("Api")
     .then((response) => response.json())
     .then((data) => {
        setData(data);
     })

   },[])

  return (

    <>
     <h1>All posts Here</h1>
        {
         data.map((data1) => (
            <ul key={data1.id}>
                <li>{data1.title}</li>
                <li>{data1.body}</li>

            </ul>
         ))

        }
    
    </>
    
  )
}

export default UseEffect1
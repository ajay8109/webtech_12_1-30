import React, { useEffect, useState } from 'react'
import axios from 'axios';

function GetData() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log("Error fetching", error)
        })
    },[])
  return (
         <>
          {
            data.map((data1) => 
                (
               <ul key={data1.id}>
                    <li>{data1.name}</li>
                    <li>{data1.email}</li>
                    <li>{data1.city}</li>
               </ul>
                )
            )
          }
         
         </>
  )
}

export default GetData
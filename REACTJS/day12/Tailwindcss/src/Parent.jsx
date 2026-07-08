import React, { useEffect, useState } from 'react'
import Child from './Child';
import axios from 'axios';

function Parent() {
    const [data, setData] = useState([])
    
    useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/users ")
     .then((response) => {
        setUsers(response.data);
        
     }).catch((error) => {
        console.log("error fetching", error)
        
     })
   },[])

   

  return (

    <Child data1 = "data"/>
  )
}

export default Parent
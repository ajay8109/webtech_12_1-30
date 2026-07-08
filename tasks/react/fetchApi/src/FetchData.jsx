import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import DisplayData from './DisplayData';


const FetchData = () => {
 const [data, setData] = useState([]);
    
   useEffect(() => {
     axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
   },[])

 

  return (
        <>
          <DisplayData  data = {data}/>
        
        </>
  )
}

export default FetchData

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AxiosChild from './AxiosChild'
import axios from 'axios';


const AxiosProps = () => {
  const [user, setUser] = useState([])
  

  useEffect(() => {
    axios.get(" https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        setUser(response.data)
    }).catch((error) => {
        console.log("Fetching the error", error)
    })

  },[])
  return (
    <AxiosChild data = {user}/>
  )
}

export default AxiosProps
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const GetData = () => {
   const [users, setUsers] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() =>{
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response) => {
        setUsers(response.data);
        setLoading(false)
     }).catch((error) => {
        console.log("error fetching", error)
        setLoading(false)
     })

   },[])
   if(loading) return <p>loading...</p>
  return (
     <>
      <h2>All user data is here</h2>

      
        <ul>
        {
            users.map((user) => (
                <li key={user.id}>
                    {user.name}
                    {user.email}
                </li>
            
            ))
        }

        </ul>
      
     
     
     </>
  )
}

export default GetData
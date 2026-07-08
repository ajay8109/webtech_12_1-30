import axios from 'axios'
import React, { useState } from 'react'

const PutData = () => {

 const [title, setTitle] =useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("https://jsonplaceholder.typicode.com/posts/1",{
            title,
            body,
            userId:1
        }).then((response) => {
            console.log("Post created:", response.data)
            alert("Post Added succesfully");
        }).catch((error) => {
            console.log("fetching error" , error)
        })
    }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
     <input type="text" value={body}  onChange={(e) => setBody(e.target.value)}/>
     <button type='submit'>add post</button>

      </form>
    </>
  )
}

export default PutData
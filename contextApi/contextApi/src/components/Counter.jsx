import React, { useContext } from 'react'
import { CreateContext } from './CreateContext'

const Counter = () => {
  const { user,theme, themeToggle } = useContext(CreateContext)

  

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      

      {
        user.map((user)=>(
             <p key={user.id}>{user.name}</p>
        ))
      }

      

      <h1>Current Theme: {theme}</h1>

      <button onClick={themeToggle}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Counter
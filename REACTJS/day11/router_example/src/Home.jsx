import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  let name = "debugShala"
  const navigate = useNavigate()

  function goAbout(){
     navigate("/about" , {state : {myName: name}})
  }

  function goContact(){
    navigate("/contact")
  }
  return (
    <>
     <h1>hy i am home page</h1>
    <Link to="/about">click for about</Link>
    <Link to="/contact">click for contact</Link>

    <button onClick={goAbout}>go for about</button>
    <button onClick={goContact}> go for contact</button>
    
     
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
     <h1>hy i am contact page</h1>
     <Link to="/">click for home</Link>
     <Link to="/about">click for about</Link>
    </>
  )
}

export default Contact
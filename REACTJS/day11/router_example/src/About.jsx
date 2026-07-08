import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <>
     <h1>hy i am About page</h1>
     <Link to="/">click for home</Link>
     <Link to="/contact">click for contact</Link>
    </>
  )
}

export default About
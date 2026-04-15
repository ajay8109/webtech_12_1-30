import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box1 = () => {
    const {theme} = useContext(ThemeContext)

const style = {
        padding : "10px",
        margin : "10px",
        color : theme === "light" ? "green" : "white",
        backgroundColor : theme === "light" ? "white" : "green"
     }

  return (
    <>
      <h1 style={style}>hy my name is Ajay verma</h1>
    </>
  )
}

export default Box1
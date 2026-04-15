import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeBox1 = () => {

     const {theme} = useContext(ThemeContext)

const style = {
        padding : "10px",
        margin : "10px",
        color : theme === "light" ? "orange" : "white",
        backgroundColor : theme === "light" ? "white" : "orange"
     }

  return (
        <>
         <h1 style={style}> hy my name is ajay </h1>
        </>
  )
}

export default ThemeBox1
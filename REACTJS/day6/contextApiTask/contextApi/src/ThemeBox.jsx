import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeBox = () => {

     const {theme} = useContext(ThemeContext)

     const style = {
        padding : "10px",
        margin : "10px",
        color : theme === "light" ? "orange" : "white",
        backgroundColor : theme === "light" ? "white" : "orange"
     }

  return (
         <>
          <h1 style={style}> inodre is no. 1  cleanest city</h1>
         </>
  )
}

export default ThemeBox
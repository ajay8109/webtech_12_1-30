import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {

    const {theme} = useContext(ThemeContext)

     const style = {
        padding : "10px",
        margin : "10px",
        color :  theme === "light" ? "orange" : "white",
        backgroundCOlor : theme === "light" ? "white" : "orange"
     }


  return (
         <>
          <h1 style={style}>indore is no. 1 cleanest city </h1>
         </>
  )
}

export default Box

import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeToggle = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
       <h2>Currently your Theme is : {theme}</h2>
       <button onClick={toggleTheme}>ToggleTheme</button>
    
    </>
 )
}

export default ThemeToggle
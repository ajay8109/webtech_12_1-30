import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const ThemeToggle = () => {

    const {theme, toggletheme} = useContext(ThemeContext)
  return (
    <>
      <h2>cureently your theme is : {theme}</h2>
      <button onClick={toggletheme}>toggleTheme</button>

    </>
  )
}

export default ThemeToggle
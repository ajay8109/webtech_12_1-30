
import React from 'react'
import { userContext } from './components/CreateContext'

export const App = () => {
  return (
       <>
        <userContext.Provider value={Ajayu}>

        </userContext.Provider>
       </>
  )
}

import React, { useCallback, useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  // const logoutuser = () => {
  //   console.log("logged out")
  // }

  const logoutuser = useCallback(() => {
        console.log("logged out")

  },[])
  return (
         

    <>
      <Navbar logout ={logoutuser} />
      <h1>count : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>increment</button>
    </>
    
  )
}

export default App

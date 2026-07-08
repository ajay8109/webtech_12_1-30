import React, { useState } from 'react'

const useCustom = (initialValue = 0) => {
    const [count, setCount] =useState(initialValue) 
 
  function increment(){
       setCount(count + 1)
  }

  function decrement(){
    setCount(count -1)
  }

  function reset(){
    setCount(initialValue)
  }

  return [count, increment, decrement, reset]

}

export default useCustom
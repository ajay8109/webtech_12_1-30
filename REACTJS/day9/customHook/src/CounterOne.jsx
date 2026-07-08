import React from 'react'
import useCustom from './useCustom'

const CounterOne = () => {
    const [count, increment, decrement] = useCustom()
  return (
         <>
          <p>counter1</p>
          <h1> count :{count}</h1>
           <button onClick={increment}>increment</button>
           <button onClick={decrement}>decrement</button>
          
         </>
  )
}

export default CounterOne
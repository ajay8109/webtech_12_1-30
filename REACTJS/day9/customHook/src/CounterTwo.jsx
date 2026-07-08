import React from 'react'
import useCustom from './useCustom'

export const CounterTwo = () => {
    const [count, increment, reset] = useCustom(10)
  return (
<>
   <p>Counter2</p>
   <h1>count : {count}</h1>
   <button onClick={increment}>increment</button>
   <button onClick={reset}>decrement</button>
</>
    
  )
}

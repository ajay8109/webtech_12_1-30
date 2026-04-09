import React, { useState } from 'react'

const Like = () => {

   const [like, setLike] = useState(0)

   function increment(e){
      setLike(like + 1)
   }

   function decrement(e){
     if(like > 0){
        setLike(like - 1)
     }
   }

   function reset(e){
     setLike(0)
   }

  return (
    <>  
      <h2>{like}</h2>
       <h1>Post Icrement, Decrement, Reset</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    
    </>
  )
}

export default Like
import React, { useRef } from 'react'

const UseRef = () => {
     const refObject1 = useRef()

     function handleSubmit(event){
        event.preventDefault();
        console.log((refObject1.current.value).length);
     }
  return (
   <form onSubmit={handleSubmit}>
   <input type="text" ref={refObject1} />
   <button type='submit'>Submit</button>

   </form>
    


    
  )
}

export default UseRef
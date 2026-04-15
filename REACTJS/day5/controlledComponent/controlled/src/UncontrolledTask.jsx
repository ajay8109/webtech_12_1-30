import React, { useRef } from 'react'

const UncontrolledTask = () => {
    const refObject = useRef();
        const refObject1 = useRef();
        const refObject2 = useRef();
        

        function handleSubmit(e){
            e.preventDefault();
    
            const name = refObject.current.value;
            const email = refObject1.current.vlaue;
            const pass = refObject2.current.value;

            const userData = {
                name,
                email,
                pass : "******"
            }
            console.log(userData);
        }
    
    
      return (
        <>
        <form onSubmit={handleSubmit}>
        
       Name : <input type="text" ref={refObject} />
        
      Email :  <input type="text" ref={refObject1} />
       Password :  <input type="text" ref={refObject2} />
        <button type='submit'>Submit</button>
    
        </form>
        
        </>
      )
}

export default UncontrolledTask
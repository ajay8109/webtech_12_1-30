
import React from 'react'
import Child from './Child'
import Child1 from './Child1'

export const Parent = () => {
  return <> <Child name="Ajay" color="red" />
            <Child1 age={20}/>

  </>
        
}
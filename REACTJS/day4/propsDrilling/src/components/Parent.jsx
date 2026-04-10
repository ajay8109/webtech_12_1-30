import React from 'react'
import Child1 from './Child1'

const Parent = () => {
    let name1 = "ajay"
  return (
    <>
      <Child1  name = {name1}/>
    </>
  )
}

export default Parent
import React from 'react'
import Child1 from './Child1';

const Child1 = ({name, age}) => {
    const name1 = name;
    const age1 = age;
  return (
    <>
     <Child2 name="name1" age="age1" />
    
    
    </>
  )
}

export default Child1
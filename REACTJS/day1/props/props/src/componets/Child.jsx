import React from 'react'



const Child = ({ name, color }) => {
  return (
    <h1 style={{ color }}>
      my name is {name}
    </h1>
  )
}

export default Child
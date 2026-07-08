import React from 'react'

const Navbar = ({logout}) => {
    console.log("Navbar")
  return (
    <>
      <button onClick={logout}>logout</button>
    </>
  )
}

export default React.memo(Navbar);
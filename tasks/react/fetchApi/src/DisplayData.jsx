import React from 'react'

const DisplayData = ({data}) => {
  return (
    <>
    
     <h1>Users List</h1>

      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.title}</h3>
          <p>{user.body}</p>
        </div>
      ))}
    
    </>
  )
}

export default DisplayData
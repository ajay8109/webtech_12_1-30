import React from 'react'

function Child({data1}) {
    
  return (
  <>
     <h1>all data here</h1>

       <ul>
        {
            data1.map((data) => (
                <li key={data.id}>
                    {data.name}
                    {data.email}
                    {data.city}
                </li>
            
            ))
        }

        </ul>
      
  </>


  )
}

export default Child

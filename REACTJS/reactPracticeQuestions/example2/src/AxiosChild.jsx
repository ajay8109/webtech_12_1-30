import React from 'react'

const AxiosChild = ({data}) => {
  return (

       <>
        {
            data.map((data1) => (
              <ul key={data1.id}>
                <li>{data1.name}</li>
                <li>{data1.email}</li>
                
              </ul>
            ))
        }
       </>
    
  )
}

export default AxiosChild
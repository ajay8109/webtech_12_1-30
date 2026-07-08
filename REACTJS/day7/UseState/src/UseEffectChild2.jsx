import React from 'react'

const UseEffectChild2 = ({data1}) => {
  return (

     <>
     
      {
         data1.map((data2) => (
            <ul key={data2.id}>
                <li>{data2.title}</li>
                <li>{data2.body}</li>

            </ul>
         ))

        }
     
     </>
    
  )
}

export default UseEffectChild2
import React from 'react'

const Listwithoutkey = () => {
    let items = [10,20,30,40,50,60]
    let listItem = items.map((item)=> <li>{item}</li>)

      
  return (
    <>
       <h1>List item</h1>
       <ul>
        {listItem}
       </ul>
    </>
  )
}

export default Listwithoutkey
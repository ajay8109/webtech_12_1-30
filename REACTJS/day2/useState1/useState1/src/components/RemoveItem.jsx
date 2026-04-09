import React, { useState } from 'react'

const RemoveItem = () => {
  
    const [item, setItem] = useState([1,2,3,4,5,6])
      
      function deleteEnd(){
          setItem((preItems)=> preItems.slice(0,preItems.length-1))
        
      }


  return (
       <>
        <button onClick={deleteEnd}>deleteItem</button>

        <ul>
        {item.map((index,item)=>(<li>{item}</li>))}
    </ul>
         
       </>
  )
}

export default RemoveItem
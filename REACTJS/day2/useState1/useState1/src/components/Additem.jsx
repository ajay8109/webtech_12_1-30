// import React, { useState } from 'react'

// const Additem = () => {
        
//     const [items, setItem] = useState([1,2,3,4,5,6,])
//     function addBegin(){
//          setItem([0, ...items]);
//     }

//     function addEnd(){
//         setItem([...items, 7])
//     }
//   return (
//        <>
//          <h2>addd item at bebinning and ending</h2>
//          <button onClick={addEnd}>addItemend</button>
//          <button onClick={addBegin}>addItembegin</button>

//          <ul>

//             {
//               items.map((item,index)=> (<li key={index}>{item}</li>))
                   
//             }
//          </ul>
        
//        </>

//   )
// }

// export default Additem









import React, { useState } from 'react'

const Additem = () => {

  const [items, setitem] = useState([1,2,3,4,5,6])

  const addBegin = () => {
    setitem((preItems) => [0, ...preItems])
  }
    
  const addEnd = () => {
    setitem((preItems) => [...preItems, 7])
  }

  return (
    <>
      <h2>Add item at beginning and end</h2>

      <button onClick={addEnd}>Add Item End</button>
      <button onClick={addBegin}>Add Item Begin</button>

      <ul>
        {items.map((item) => (
          <li key={`item-${item}`}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Additem
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const UseStateExample = () => {
//     const [count, setCount] = useState(0);
//     const [count1, setCount1] = useState(0);

//     useEffect(() => {
//         console("Run every render");
//     } )

//     useEffect(() => {
//         console("run only one render ")
//     } , [])

//     useEffect(() => {
//         console("run every render")
//     }[count1])
//   return (
//       <>
//          <h1>Count : {count}</h1>
//          <h2>Count1 : {count1}</h2>
//          <button onClick={() => setCount(count + 1)}>Increment</button>
//          <button onClick={() => setCount1(count1 + 1)}> Incement of count 1</button>
      
//       </>
//   )
// }

// export default UseStateExample
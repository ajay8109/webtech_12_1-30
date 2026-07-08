import React, { useMemo, useState } from 'react'

const SimpleUseMemo = () => {
   const [add, setAdd] = useState(0)
   const [sub, setSub] = useState(100)
    
   const multi = useMemo(function multiply(){
     console.log("hy i am use memo")
   },[add])

  return (
    <>
    {multi}
    <button onClick={() => setAdd(add + 1)}>Add</button>
    <button onClick={() => setSub(sub -1)}>Sub</button>
    </>

  )
}

export default SimpleUseMemo
import React from 'react'
import { useState } from 'react'
import { Activity } from 'react'

const Todolist = () => {
   
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]); // empty array

// add task logic


function addActivity(){
    setListData((listData) => {
        const updatedList = [...listData, activity]
        setActivity(" ");
        return updatedList;
    })
}

function removeActivity(index){
    const updatedListData = listData.filter((element, id) => {
        return index != id;
    });
    setListData(updatedListData)
}

function removeAll(){
     setListData([]);
}

  return (
    <>
     <input type="text"  placeholder='enter your activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
    
       <button onClick={addActivity}>Add</button> 

       <h3> Your List :</h3> 
       {listData != [] && 
       listData.map((data, index) => {
        return (
             <>
              <p key={index}>{data}</p>
             <button onClick={(e) => removeActivity(index)}>Remove</button>
             </>
        )
       })}

       {listData.length >= 1 && <button onClick={removeAll}>RemoveAll</button>}
    </>
  )
}

export default Todolist
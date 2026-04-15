import React from 'react'
import { useState } from 'react'

const Followers = () => {
    const [follower, setFollower] = useState(0);

    function follow(){
        setFollower(follower + 1)
    }

    function unFollow(){
        if(follower > 0){
            setFollower(follower -1)
        }
    }

    function reset(){
        setFollower(0)
    }
  return (

      <>
      <div style={{padding : "10px", margin : "10px", width: "200px", backgroundColor: "white"}}>
        <h2 style={{padding : "10px", margin: "10px" , width: "180px" , color : "black"}}>Follower : {follower}</h2>
        <button onClick={follow} style={{padding: "10px", margin: "10px"}}>follow</button>
        <button onClick={unFollow} style={{padding: "10px", margin: "10px"}}  >unFollow</button>
        <button onClick={reset} style={{padding: "10px", margin: "10px"}}  >Reset</button>
      </div>
      
      </>
    
  )
}

export default Followers
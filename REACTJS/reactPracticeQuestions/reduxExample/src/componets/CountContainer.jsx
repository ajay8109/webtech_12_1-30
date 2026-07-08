import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement,reset } from './ActionCounter'

function CountContainer() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count)
  return (

    <>
        <div>Count container</div>
        <h2>cout: {counter}</h2>

        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    
    </>
  )
}

export default CountContainer
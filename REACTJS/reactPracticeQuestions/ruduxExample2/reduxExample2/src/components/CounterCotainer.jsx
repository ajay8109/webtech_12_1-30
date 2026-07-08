import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,reset } from './CounterAction';

function CounterCotainer() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count)
   return (

    <>
        <h1>Counter store</h1>
        <h1>Count : {counter}</h1>

        <button onClick={() => dispatch(increment())}></button>
        <button onClick={() => dispatch(decrement())}></button>
        <button onClick={() => dispatch(reset)}></button>

    

    </>
    
  )
}

export default CounterCotainer
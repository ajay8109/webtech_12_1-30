import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyBook, saleBook } from './BookActions';



 function BookContainer(){
  const dispatch = useDispatch();
  const noOfBooks = useSelector((state) => state.NumberOfBooks)

  return (
<>
   <div>BookContainer</div>
   <h2>No of Books- {noOfBooks}</h2>

   <button onClick={() => dispatch(buyBook())}>buy</button>
   <button onClick={() => dispatch(saleBook())}>sale</button>

</>
  )
}

export default BookContainer
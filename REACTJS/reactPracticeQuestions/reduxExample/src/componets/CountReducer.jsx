import React from 'react'
import { INCREMENT,DECTREMENT,RESET } from './CounterType'

const initialState = {
    count : 0,
}

export const CountReducer = (state=initialState,action) => {
    
  switch(action.type){
          case INCREMENT:
              return {
                  ...state,
                  count : state.count + 1,
              }
  
            case DECTREMENT:
              return {
                  ...state,
                  count : state.count - 1,
                  
              }  

              case RESET :
                return {
                    ...state,
                    count : state.count = 0,
                }
  
              default:
                  return state;
      }
    }

      export default CountReducer

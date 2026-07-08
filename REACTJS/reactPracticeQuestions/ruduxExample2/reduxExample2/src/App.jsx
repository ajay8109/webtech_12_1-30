import React from 'react'
import store from './components/Store'
import {Provider} from 'react-redux'
import CounterCotainer from './components/CounterCotainer'


function App() {
  return (
     
       <Provider store = {store}>
        <>
          <CounterCotainer/>

          </>
       </Provider>

      

     
  )
}

export default App
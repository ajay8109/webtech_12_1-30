import React from 'react'
import CountContainer from './componets/CountContainer'
import store from './componets/Store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store = {store}>
   <>
    <CountContainer/>
   </>
     
    </Provider>
  )
}

export default App
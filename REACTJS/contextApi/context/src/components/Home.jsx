import React from 'react'
import { useContext } from 'react'
import { userContext } from './CreateContext'

const user = useContext(useContext)
const Home = () => {
  return <h1>name: {user}</h1>
}

export default Home
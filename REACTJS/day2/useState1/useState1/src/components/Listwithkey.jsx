import React from 'react'

const Listwithkey = () => {
    let country = ["india", "america", "china", "pak", "Usa"]

    let listItem = country.map((item,index)=> <li key ={index}>{item}</li>)
  return (
    <>
    <ul>
        {listItem}
    </ul>
    </>
  )
}

export default Listwithkey
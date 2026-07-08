import React, { useEffect, useState } from 'react'
import './Style.css'

const UseEffect3 = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProduct(data.products)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="loading">Loading...</p>

  return (
    <>
      <h2 className="heading">🛒 Products</h2>

      <div className="grid">
        {product.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="category">{item.category}</p>
            <p className="price">₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default UseEffect3
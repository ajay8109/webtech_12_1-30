import React, { useEffect, useState } from 'react'


const UseEffect4 = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>loading .........</p>
    }

    if (!product) {
        return <p>data not found</p>
    }

    return (
        <>
            <h3>All product here</h3>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "10px"
            }}>
                {
                    product.products.map((data) => (
                        <div key={data.id} style={{ border: "1px solid", padding: "10px" }}>
                            <h4>{data.title}</h4>
                            <p>{data.category}</p>
                            <p>₹{data.price}</p>
                            <img src={data.thumbnail} alt={data.title} width="100" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UseEffect4
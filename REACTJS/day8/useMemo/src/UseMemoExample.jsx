import React, { useEffect, useMemo, useState } from 'react'

export const UseMemoExample = () => {
    const [data, setdata] = useState([])
    const [category, setCategory] = useState("all")
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((result) => setdata(result.products));

    },[])


    // logic of useMemo

    const filteredProducts = useMemo(() =>{
        console.log("filtering products")
        return data.filter((p) => {
            const matchesCategory = category === "all" || p.category === category;
            const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
            return matchesCategory && matchesSearch;
        })
    },[data, category, search])

  return (
    <>
     <h1>all products here</h1>
     <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">all</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
     </select>
    
    
       {/* {/search filter} */}

       <input type="text" 
       placeholder='serach products'
       value={search}
       onChange={(e) => setSearch(e.target.value)}/>


       <div>
        {filteredProducts.map((product) => (
            <div key={product.id}>
               <h3>{product.title}</h3>
               <p>{product.category}</p>
               <p>{product.price}</p>
              <p>{product.thumbnail} <img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"  alt="" />
               </p>
            </div>
        ))


        }


       </div>
    </>
  )
}

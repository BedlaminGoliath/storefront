import React from 'react'
import Product from '../Product'
import { useSelector } from "react-redux"


const Products = () => {

    const products = useSelector((state)=>{
        return state.products.products})
    
<section>
    {products.map((product) => (
        <Products key={product} product={product} />))}
</section>
    )
}

export default Products

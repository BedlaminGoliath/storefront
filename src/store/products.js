import { createSlice } from "@reduxjs/toolkit";

const PRODUCTS = [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ];
  
  const productSlice=createSlice({
    name:"product",
    initialState: {
        products: PRODUCTS,
        activeCategory: undefined,
    },
    reducers:{
        setActiveCategory: (state, action)=>{
            state.activeCategory = action.payload;
        },
    },
  });

  export const filteredProducts = ({
    product: { activeCategory, products }})=>
    activeCategory 
    ? products.filter((product)=> product.category===activeCategory): products;

    export default productSlice;
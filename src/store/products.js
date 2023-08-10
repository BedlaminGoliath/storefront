import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContentPasteSearcgedOutlined } from "@mui/icons-material";

// import { ContentPasteSearchOutlined } from "@mui/icons-material";
// import apple from "./imgs/catApple.png"
// import radio from "./imgs/radio.png"
// import socks from "./imgs/socks.png"
// import tv from "./imgs/television.png"
// import shirt from "./imgs/tshirt.png"
// import bread from "./imgs/bread.png"
// import eggs from "./imgs/eggs.png"


// const PRODUCTS = [
//     { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, img: tv },
//     { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, img: radio},
//     { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, img: shirt },
//     { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 , img: socks},
//     { name: 'Apples', category: 'food', price: .99, inStock: 500, img: apple },
//     { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, img: eggs },
//     { name: 'Bread', category: 'food', price: 2.39, inStock: 90, img: bread},
//   ];
  

  export const display = createAsyncThunk('product/getall', async ()=>{
    const response = await fetch (process.env.REACT_APP_API + '/products');
    const json = await response.json();

    return json.results;
  });

  const productSlice = createSlice({
    name:"product",
    initialState: {
        products: [],
        activeCategory: undefined,
        selectedProduct: {}
    },
    reducers:{
        setActiveCategory: (state, action)=>{
            state.activeCategory = action.payload;
        },
        decreaseStock: (state, action)=>{
          const updated = state.products.map((item)=>{
            if(item.name===action.payload){
              return{...item, inStock: item.inStock-1};
            } else{
              return item;
            }
          });
          state.products = updated;
        },
        increasedStock: (state, action)=>{
          const updated = state.products.map((item)=>{
            if(item.name === action.payload){
              return{...item, inStock: item.inStock+1}
            } else {
              return item
            }
          });
          state.products = updated;
        },
        setProduct: (state,action)=>{
          state.selectedProduct = state.product[action.payload];
        }
    },
     extraReducers: (builder)=> {
       builder.addCase(display.fulfilled, (state, {payload})=> {state.products = payload});
     },
  });

  export const filteredProducts = ({
    product: { activeCategory, products }})=>
    activeCategory 
    ? products.filter((product)=> product.category===activeCategory): products;

    export default productSlice;
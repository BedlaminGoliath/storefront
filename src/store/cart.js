import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: { 
        cartItems:[],
        numItems:0,
    },

    reducers: {
        addCartItem: (state, action)=>{
            state.numItems++;
            state.cartItems.push(action.payload);
        },
        removeCartItem: (state, action)=>{
            const index = state.cartItems.indexOf(action.payload);
            state.cartItems.splice(index, 1);
            state.numItems--;
        },
    },
});

export default cartSlice;
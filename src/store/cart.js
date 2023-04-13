import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        numberOfItems: 0
    },

    reducers: {
        addItem: (state, action)=>{
            let product = action.payload;
            //updates state while items get added
            state.numberOfItems++;
            state.cartItems.push(product);
        },
        // removeItem: (state, action)=>{
        //     const inde
        // }
    }
});

export default cartSlice;
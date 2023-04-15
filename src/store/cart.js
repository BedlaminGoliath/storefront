import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        numberOfItems: 0,
    },

    reducers: {
        addItem: (state, action)=>{
            
            //updates state while items get added
            state.numberOfItems++;
            state.cartItems.push(action.payload);
        }
        // removeItem: (state, action)=>{
        //     const inde
        // }
    }
});

export default cartSlice;
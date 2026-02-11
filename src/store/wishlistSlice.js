import {createSlice } from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState: {
        items: [],
    },
    reducers: {
        setWishlist(state, action){
            console.log(action)//type,payload
            state.items = action.payload
        },
        removeItem(state, action){
            const productId = action.payload;

            state.items = state.items.filter(
                item => item.product._id !== productId
            );
        },
        addItem(state, action) {
    state.items.push(action.payload);
  }
        
    }
})
console.log("Hello",wishlistSlice)
export const {setWishlist, removeItem,addItem} = wishlistSlice.actions;
export default wishlistSlice.reducer;
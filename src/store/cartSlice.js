import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        setCart(state, action) {
            console.log(action.type)//cart/setCart
            state.items = action.payload;
        },
        clearCart(state) {
            state.items = [];
        },
        
    },
});

export const selectCartQuantity = (state) =>
  state.cart.items.reduce(
    (total, item) => total + 1,
    0
  );

export const {setCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
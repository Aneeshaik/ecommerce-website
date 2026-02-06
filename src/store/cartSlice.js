import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        setCart(state, action) {
            state.items = action.payload;
        },
        clearCart(state) {
            state.items = [];
        },
        getTotalQuantity(state, action) {

        }
    },
});

export const selectCartQuantity = (state) =>
  state.cart.items.reduce(
    (total, item) => total + 1,
    0
  );

export const {setCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
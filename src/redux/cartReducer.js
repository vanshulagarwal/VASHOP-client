import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload._id)

            if (item) {
                if (item.quantity + action.payload.quantity <= 10) {
                    item.quantity += action.payload.quantity;
                }
            }
            else {
                state.products.push(action.payload);
            }
        },
        reduceQuantity: (state, action) => {
            const item = state.products.find((item) => item._id === action.payload)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                }
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item._id !== action.payload)
        },
        resetCart: (state, action) => {
            state.products = []
        },
    },
})

export const { addToCart, reduceQuantity, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
import {
    createSlice
} from "@reduxjs/toolkit";


const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cart")) || []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const product = action.payload
            const exist = state.cartItems.find((item) => item.id === product.id)
            if (exist) {
                exist.quantity += 1
            } else {
                state.cartItems.push({
                    ...product,
                    quantity: 1
                })
            }
        },
        increment: (state, action) => {

            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item) {
                item.quantity += 1
            }
        },
        decrement: (state, action) => {
            const item = state.cartItems.find((item) => item.id == action.payload)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1
                } else {

                    state.cartItems = state.cartItems.filter(
                        (item) => item.id !== action.payload
                    );

                }
            }

        },
        removeCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            localStorage.setItem(
        "cart",
        JSON.stringify(state.cartItems)
    );
        },
        
    },
    

})

export const {
    addtoCart,
    increment,
    decrement,
    removeCart
} = cartSlice.actions
export default cartSlice.reducer
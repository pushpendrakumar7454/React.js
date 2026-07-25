import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/AuthSlice'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'


export const store=configureStore({
    reducer:{
        auth:authReducer,
         products: productReducer,
         cart: cartReducer,
    }
})

store.subscribe(()=>{
    const cart=store.getState().cart.cartItems;
    localStorage.setItem('cart',JSON.stringify(cart))
})

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authUser'
import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/cartSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer,
        cart:cartReducer
    }
})

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authUser'
import productReducer from '../features/products/productSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})
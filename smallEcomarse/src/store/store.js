import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../featurs/auth/userAuth'
import productReducer from '../featurs/product/productSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})



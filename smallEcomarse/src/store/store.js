import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../featurs/auth/userAuth'

export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})



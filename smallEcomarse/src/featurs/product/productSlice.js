import { createSlice } from "@reduxjs/toolkit";



const productSlice=createSlice({
    name:'product',
    initialState:{
        products:[],
        loading:false,
        error:null

    },
    reducers:{
        setLoadiing:(state)=>{
            state.loading=true
        },
        setProduct:(state,action)=>{
            state.loading=false
            state.products=action.payload
        },
        serError:(state,action)=>{
            state.loading=false
            state.error=action.payload
        }
    }
})

export const {serError,setLoadiing,setProduct}=productSlice.actions
export default productSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


const productSlice=createSlice({
    name:"product",
    initialState:{
       products:[],
       loading:false,
       error:null
    },
    reducers:{
        setLoading:(state)=>{
             state.loading=true
        },
        setProduct:(state,action)=>{
            state.loading=false
            state.products=action.payload
        },
        setError:(state,action)=>{
            state.loading=false
            state.error=action.payload

        }

    }

})

export const {setError,setLoading,setProduct}=productSlice.actions
export default productSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItem:[]
    },
   reducers:{
     addtoCart:(state,action)=>{
        const exist=state.cartItem.find((item)=>item.id==action.payload.id)
        if(exist){
            exist.quantity+=1
        }else{
            state.cartItem.push({...action.payload,quantity:1})
        }
    },
    removeCart:(state,action)=>{
        state.cartItem=state.cartItem.filter((item)=>item.id!==action.payload)
    },
    increment:(state,action)=>{
        const item=state.cartItem.find((item)=>item.id===action.payload)
        if(item){
            item.quantity+=1
        }
    },
    decrement:(state,action)=>{
        const item=state.cartItem.find((item)=>item.id===action.payload)
        if(item){
            if(item.quantity>1){
                item.quantity-=1
            }else{
                state.cartItem=state.cartItem.filter((item)=>item.id!==action.payload)
            }
        }
    }
   }
})

export const {addtoCart,removeCart,increment,decrement}=cartSlice.actions
export default cartSlice.reducer
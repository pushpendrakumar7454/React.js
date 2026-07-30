import {createSlice} from '@reduxjs/toolkit'


const saveCart=(cart)=>{
    localStorage.setItem('cart',JSON.stringify(cart))
}



const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItem:JSON.parse(localStorage.getItem("cart"))||[]
    },
    reducers:{
        addtoCart:(state,action)=>{
           const exist=state.cartItem.find((item)=>item.id===action.payload.id)
           if(exist){
            exist.quantity+=1
           }else{
            state.cartItem.push({...action.payload,quantity:1})
           }
           saveCart(state.cartItem)
        },
        removeCart:(state,action)=>{
          state.cartItem= state.cartItem.filter((item)=>item.id!==action.payload)
          saveCart(state.cartItem)
        },
        increment:(state,action)=>{
            const item=state.cartItem.find((item)=>item.id===action.payload)
            if(item){
                item.quantity+=1
            }
            saveCart(state.cartItem)
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
           saveCart(state.cartItem)
        }
    }
})

export const {addtoCart,removeCart,increment,decrement}=cartSlice.actions
export default cartSlice.reducer

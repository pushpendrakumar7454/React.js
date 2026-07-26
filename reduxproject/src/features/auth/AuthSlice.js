import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const initialState={
    users:JSON.parse(localStorage.getItem("users"))||[],
    currentUser:JSON.parse(localStorage.getItem('currentUser'))||null
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            state.users.push(action.payload);
            localStorage.setItem('users',JSON.stringify(state.users))
           

        },
        loginUser:(state,action)=>{
            state.currentUser=action.payload;
            localStorage.setItem(
                "currentUser",
                JSON.stringify(action.payload)
            )

        },
        logoutUser:(state)=>{
            state.currentUser=null
            localStorage.removeItem('currentUser')
        }
    },
})
export const{
    addUsers,
    loginUser,
    logoutUser
}=authSlice.actions

export  default authSlice.reducer;
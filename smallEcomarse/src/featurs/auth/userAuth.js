import { createSlice } from "@reduxjs/toolkit";



const authSlice=createSlice({
    name:"auth",
    initialState:{
        users:JSON.parse(localStorage.getItem("users"))||[],
        currentUser:JSON.parse(localStorage.getItem("currentUser"))||null
    },
    reducers:{
        RegisterUser:(state,actions)=>{
            state.users.push(actions.payload)
            localStorage.setItem("users",JSON.stringify(state.users))
        },
        loginUser:(state,actions)=>{
            state.currentUser=actions.payload
            localStorage.setItem("currentUser",JSON.stringify(actions.payload))

        },
        logoutUser:(state)=>{
            state.currentUser=null
            localStorage.removeItem("currentUser")
        }
    }


})


export const {RegisterUser,loginUser,logoutUser}=authSlice.actions
export default authSlice.reducer
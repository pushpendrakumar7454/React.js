import { createSlice } from "@reduxjs/toolkit";


const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem("users")) || [];
  } catch {
    return [];
  }
};


const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  } catch {
    return null;
  }
};



const initialState = {
  users: getUsers(),
  currentUser: getCurrentUser(),
};



const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {


    addUsers: (state, action) => {

      const user = {
        ...action.payload,
        id: Date.now(),
      };


      state.users.push(user);


      localStorage.setItem(
        "users",
        JSON.stringify(state.users)
      );

    },


    loginUser: (state, action) => {

      state.currentUser = action.payload;


      localStorage.setItem(
        "currentUser",
        JSON.stringify(action.payload)
      );

    },


    logoutUser: (state) => {

      state.currentUser = null;


      localStorage.removeItem(
        "currentUser"
      );

    },

  },

});



export const {
  addUsers,
  loginUser,
  logoutUser,
} = authSlice.actions;



export default authSlice.reducer;
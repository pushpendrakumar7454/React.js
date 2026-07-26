import { createSlice } from "@reduxjs/toolkit";

const saveCart = (cartItems) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
  }
};

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    addtoCart: (state, action) => {
      const product = action.payload;

      const exist = state.cartItems.find((item) => item.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      }

      saveCart(state.cartItems);
    },

    increment: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }

      saveCart(state.cartItems);
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload,
          );
        }
      }

      saveCart(state.cartItems);
    },

    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );

      saveCart(state.cartItems);
    },
    checkout: (state) => {
  state.cartItems = [];

  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user) {
    localStorage.setItem(
      `cart_${user.id}`,
      JSON.stringify([])
    );
  }
},
  },
  
});

export const {
  setCart,
  clearCart,
  addtoCart,
  increment,
  decrement,
  removeCart,
  checkout
} = cartSlice.actions;

export default cartSlice.reducer;

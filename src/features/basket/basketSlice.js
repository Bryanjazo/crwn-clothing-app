import { createSlice } from "@reduxjs/toolkit";

import { addCartItem } from "./basket.actions";
import { removeCartItems, updateCount } from "./basket.actions";

const initialState = {
  isOpen: false,
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
};

const basketSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    addCartItems: (state, action) => {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      const updatedCartCount = updateCount(newCartItems);
      state.cartItems = updatedCartCount.cartItems;
      state.itemsInCart = updatedCartCount.itemsInCart;
      state.cartTotal = updatedCartCount.newCartTotal;
    },
    removeAllItemsFromCart: (state, action) => {
      state.cartItems = [];
      state.itemsInCart = 0;
      state.cartTotal = 0;
    },
    decrementItemsFromCart: (state, action) => {
      const newCartItems = removeCartItems(state.cartItems, action.payload);
      const updatedCartCount = updateCount(newCartItems);
      state.cartItems = newCartItems;
      state.itemsInCart = updatedCartCount.itemsInCart;
      state.cartTotal = updatedCartCount.newCartTotal;
    },
  },
});

export const {
  setIsOpen,
  addCartItems,
  removeAllItemsFromCart,
  setCartItems,
  decrementItemsFromCart,
} = basketSlice.actions;

export default basketSlice.reducer;

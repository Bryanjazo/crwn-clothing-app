import { useState, createContext, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isOpen: false,
  setOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const value = { isOpen, setOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

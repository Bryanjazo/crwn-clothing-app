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
export const decrementItemsFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const CartContext = createContext({
  isOpen: false,
  setOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  itemsInCart: 0,
  setItemsInCart: () => {},
  cartTotal: 0,
  decrementItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setItemsInCart(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const decrementItems = (product) => {
    setCartItems(decrementItemsFromCart(cartItems, product));
  };
  const value = {
    isOpen,
    setOpen,
    cartItems,
    addItemToCart,
    itemsInCart,
    setItemsInCart,
    cartTotal,
    decrementItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import { useState, createContext, useEffect } from "react";

export const CartContext = createContext({
  isOpen: false,
  setOpen: () => null,
});

export const CartProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const value = { isOpen, setOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

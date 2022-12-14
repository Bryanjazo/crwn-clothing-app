import "../styles/cart-icon/cart-icon.styles.jsx";
import {
  ShoppingIconComponent,
  CartIconContainer,
  ItemCountContainer,
} from "../styles/cart-icon/cart-icon.styles.jsx";
import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export default function CartIcon() {
  const { isOpen, setOpen, itemsInCart } = useContext(CartContext);
  const handleToggle = async (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };
  return (
    <CartIconContainer>
      <ShoppingIconComponent onClick={handleToggle} />
      <ItemCountContainer>{itemsInCart}</ItemCountContainer>
    </CartIconContainer>
  );
}

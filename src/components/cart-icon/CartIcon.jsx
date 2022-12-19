import "../styles/cart-icon/cart-icon.styles.jsx";
import {
  ShoppingIconComponent,
  CartIconContainer,
  ItemCountContainer,
} from "../styles/cart-icon/cart-icon.styles.jsx";
import React from "react";
import { setIsOpen } from "../../features/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export default function CartIcon() {
  const dispatch = useDispatch();
  const { isOpen, itemsInCart } = useSelector((state) => state.basket);

  const handleToggle = async (e) => {
    e.preventDefault();
    dispatch(setIsOpen(!isOpen));
  };
  return (
    <CartIconContainer>
      <ShoppingIconComponent onClick={handleToggle} />
      <ItemCountContainer>{itemsInCart}</ItemCountContainer>
    </CartIconContainer>
  );
}

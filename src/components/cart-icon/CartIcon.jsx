import "../styles/cart-icon/cart-icon.styles.jsx";
import {
  ShoppingIconComponent,
  CartIconContainer,
  ItemCountContainer,
} from "../styles/cart-icon/cart-icon.styles.jsx";
import React from "react";
import { setIsOpen } from "../../features/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartItems,
} from "../../features/basket/basket.selector.js";
export default function CartIcon() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsCartOpen);
  const itemsInCart = useSelector(selectCartItems);

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

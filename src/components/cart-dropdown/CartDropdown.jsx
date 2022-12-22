import React from "react";

import { useNavigate } from "react-router-dom";
import {
  CartItems,
  CartDropDownContainer,
  EmptyMessage,
} from "../styles/cart-drop-down/cart-drop-down.styles";

import { useSelector } from "react-redux";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

export default function CartDropdown() {
  const { cartItems } = useSelector((state) => state.basket);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItems={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go to check out</Button>
    </CartDropDownContainer>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CartItems,
  CartDropDownContainer,
  EmptyMessage,
} from "../styles/cart-drop-down/cart-drop-down.styles";
// import "../styles/cart-drop-down/cart-drop-down.styles.jsx";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
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

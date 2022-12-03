import React from "react";
import "../styles/cart-drop-down/cart-drop-down.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItems={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button>Go to check out</Button>
    </div>
  );
}

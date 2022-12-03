import React from "react";
import "../styles/cart-drop-down/cart-drop-down.styles.scss";
import Button from "../button/Button";
export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to check out</Button>
      </div>
    </div>
  );
}

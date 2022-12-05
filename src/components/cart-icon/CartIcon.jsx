import "../styles/cart-icon/cart-icon.styles.scss";

import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export default function CartIcon() {
  const { isOpen, setOpen, itemsInCart } = useContext(CartContext);
  const handleToggle = async (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={handleToggle} />
      <span>{itemsInCart}</span>
    </div>
  );
}

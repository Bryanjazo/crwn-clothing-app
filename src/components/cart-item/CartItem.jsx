import React from "react";
import "../styles/cart-items/cart-items.styles.scss";
export default function CartItem({ cartItems }) {
  console.log(cartItems);
  const { name, imageUrl, price, quantity } = cartItems;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
}

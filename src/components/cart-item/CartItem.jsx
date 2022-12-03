import React from "react";

export default function CartItem({ cartItems }) {
  const { name, quantity } = cartItems;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}

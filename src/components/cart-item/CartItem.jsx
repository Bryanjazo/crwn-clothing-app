import React from "react";
import {
  Name,
  CartItemContainer,
  ItemDetails,
  Image,
} from "../styles/cart-items/cart-items.styles.jsx";
export default function CartItem({ cartItems }) {
  console.log(cartItems);
  const { name, imageUrl, price, quantity } = cartItems;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}

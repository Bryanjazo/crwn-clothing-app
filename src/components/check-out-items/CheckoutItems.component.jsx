import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../styles/checkout/check-out-items.styles.scss";
export default function CheckoutItems({ cartItem }) {
  const { addItemToCart, decrementItems, removeItems } =
    useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;
  const clearItemHandler = () => decrementItems(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItems(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={clearItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

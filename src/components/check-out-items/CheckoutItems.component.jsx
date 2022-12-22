import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../styles/checkout/check-out-items.styles.scss";

import {
  addCartItems,
  removeAllItemsFromCart,
  decrementItemsFromCart,
} from "../../features/basket/basketSlice";
import { useDispatch } from "react-redux";
export default function CheckoutItems({ cartItem }) {
  const dispatch = useDispatch();
  const { decrementItems } = useContext(CartContext);
  const { imageUrl, name, price, quantity } = cartItem;
  const clearItemHandler = () => dispatch(decrementItemsFromCart(cartItem));
  const addItemHandler = () => dispatch(addCartItems(cartItem));
  const removeItemHandler = () => dispatch(removeAllItemsFromCart());

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

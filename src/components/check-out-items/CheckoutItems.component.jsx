import React from "react";

export default function CheckoutItems({ items }) {
  console.log(items);
  const removeItemsFromCart = () => {};
  return (
    <div className="check-out-items-container">
      {" "}
      <div className="item-details-container"></div>
      <div className="product-deisplay-container">
        <img src="#" alt="#" />
        <br />
        <span className="description"></span>
        <br />
        <span className="quantity">
          <span>arrow left</span>
          <span>arrow right </span>
        </span>
        <br />
        <span className="total-price">price</span>
        <br />
        <span className="remove-items">
          <button onClick={removeItemsFromCart}>x</button>
        </span>
      </div>
    </div>
  );
}

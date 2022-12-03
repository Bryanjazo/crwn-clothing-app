import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function Checkout() {
  const { cartItems, addItemToCart, decrementItems } = useContext(CartContext);

  return (
    <div className="check-out-container">
      <div>check out</div>
      {cartItems.map((item) => {
        const { id, imageUrl, name, quantity } = item;
        return (
          <div key={id}>
            <img src={imageUrl} alt="" />
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(item)}>increment</span>
            <br />
            <span onClick={() => decrementItems(item)}>decrement</span>
          </div>
        );
      })}
    </div>
  );
}

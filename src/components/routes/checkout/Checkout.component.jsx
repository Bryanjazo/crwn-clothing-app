import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItemmsArr,
} from "../../../features/basket/basket.selector";
import CheckoutItems from "../../check-out-items/CheckoutItems.component";
import "../../styles/checkout/check-out-styles.scss";
export default function Checkout() {
  const cartItems = useSelector(selectCartItemmsArr);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: {cartTotal}</div>
    </div>
  );
}

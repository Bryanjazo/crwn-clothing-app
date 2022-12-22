import { createSelector } from "reselect";

const selectCartReducer = (state) => state.basket;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (basket) => basket.isOpen
);

export const selectCartItemmsArr = createSelector(
  [selectCartReducer],
  (basket) => basket.cartItems
);
export const selectCartItems = createSelector(
  [selectCartReducer],
  (basket) => basket.itemsInCart
);

export const selectCartTotal = createSelector(
  [selectCartReducer],
  (basket) => basket.cartTotal
);

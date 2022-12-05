import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
const CART_ACTION_TYPES = {
  IS_OPEN_CART: "IS_OPEN_CART",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
};
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.IS_OPEN_CART:
      return {
        ...state,
        isOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type}`);
  }
};

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const decrementItemsFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItemsFromCart = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  itemsInCart: 0,
  setItemsInCart: () => {},
  cartTotal: 0,
  decrementItems: () => {},
  removeItems: () => {},
});

export const CartProvider = ({ children }) => {
  // const [isOpen, setOpen] = useState(false);

  const [{ isOpen, cartItems, cartTotal, itemsInCart }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setOpen = (open) => {
    dispatch(createAction(CART_ACTION_TYPES.IS_OPEN_CART, open));
  };

  const updateCartItems = (newCartItems) => {
    // dispatch new action with payload
    const newCartCount = newCartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        itemsInCart: newCartCount,
      })
    );
  };
  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItems(newCartItems);
  };

  const decrementItems = (product) => {
    const newCartItems = decrementItemsFromCart(cartItems, product);
    updateCartItems(newCartItems);
  };
  const removeItems = (product) => {
    const newCartItems = removeItemsFromCart(cartItems, product);
    updateCartItems(newCartItems);
  };

  const value = {
    isOpen,
    setOpen,
    cartItems,
    addItemToCart,
    itemsInCart,
    cartTotal,
    decrementItems,
    removeItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

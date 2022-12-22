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

export const removeCartItems = (cartItems, productToRemove) => {
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

export const updateCount = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItems) => total + cartItems.quantity,
    0
  );
  const newCartTotal = newCartItems.reduce(
    (total, cartItems) => total + cartItems.quantity * cartItems.price,
    0
  );

  const cart = {
    cartItems: newCartItems,
    itemsInCart: newCartCount,
    newCartTotal: newCartTotal,
  };

  return cart;
};

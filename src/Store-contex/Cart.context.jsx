import { createContext, useState, useReducer } from "react";
import { createAction } from "../Utils/Reducer";
// -----------------------------------
const addCartItem = (items, productToAdd) => {
  // find product item containt product to add
  const existingCartItem = items.find((Item) => Item.id === productToAdd.id);
  if (existingCartItem) {
    return items.map(
      (item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 } // if find incerment quantitiy
          : item //make new array
    );
  }
  return [...items, { ...productToAdd, quantity: 1 }];
};
// ---------------------------------------
const removeCartItem = (items, productToRemove) => {
  const existingCartItem = items.find((Item) => Item.id === productToRemove.id); // find product item containt product to remove
  if (existingCartItem.quantity === 1) {
    return items.filter((item) => item.id !== productToRemove.id); //if no more product
  }
  return items.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 } //return beck the item
      : item
  );
};
// -------------------------------------------
const clearCartItem = (items, productToClear) => {
  const existingCartItem = items.find((Item) => Item.id === productToClear.id); // find product item containt product to clear
  if (existingCartItem) {
    return items.filter((item) => item.id !== productToClear.id); //if no more product
  }
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItemfromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unheandel type ${type} in userReducer`);
  }
};
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [{ cartCount, cartTotal, cartItems }, dispatch] = useReducer(
    CartReducer,
    INITIAL_STATE
  );
  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemfromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemfromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemfromCart,
    clearItemfromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

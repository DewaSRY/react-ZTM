import { CART_ACTION_TYPES } from "./Cart-taypes";
import { createAction } from "../../Utils/Reducer";

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

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemfromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemfromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

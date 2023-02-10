import { createContext, useState, useEffect } from "react";

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
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  //--------------------------------
  useEffect(() => {
    const newCartCOunt = cartItem.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCOunt);
  }, [cartItem]);
  useEffect(() => {
    const newCartTotal = cartItem.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItem]);
  // ---------------------------------------------
  function addItemToCart(productToAdd) {
    setCartItem(addCartItem(cartItem, productToAdd));
  }
  function removeItemfromCart(productToRemove) {
    setCartItem(removeCartItem(cartItem, productToRemove));
  }
  function clearItemfromCart(productToClear) {
    setCartItem(clearCartItem(cartItem, productToClear));
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItem,
    addItemToCart,
    removeItemfromCart,
    clearItemfromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Named export
export const StoreContext = createContext(null);

const StoreContextProvider = ( props ) => {
  const [cartItems, setCartItems] = useState({});

  // Thêm vào giỏ hàng
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Giảm số lượng hoặc xóa khỏi giỏ
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Default export
export default StoreContextProvider;

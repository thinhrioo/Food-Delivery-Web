/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Named export
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
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
    setCartItems((prev) => {
      if (!prev[itemId]) return prev; // nếu chưa có thì giữ nguyên

      if (prev[itemId] === 1) {
        // nếu còn 1 thì xóa hẳn khỏi giỏ
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }

      // nếu >1 thì giảm đi 1
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// Default export
export default StoreContextProvider;

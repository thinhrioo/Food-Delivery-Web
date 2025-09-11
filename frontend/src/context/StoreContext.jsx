/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Named export
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
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
      const updated = { ...prev, [itemId]: prev[itemId] - 1 };
      if (updated[itemId] <= 0) {
        delete updated[itemId];
      }
      return updated;
    });
  };

  // Tính tổng tiền giỏ hàng
  const getTotalCartAmount = () => {
  let total = 0;
  for (const itemId in cartItems) {
    if (cartItems[itemId] > 0) {
      const item = food_list.find((f) => f.id === itemId); // so sánh string với string
      if (item) {
        total += item.price * cartItems[itemId];
      }
    }
  }
  return total;
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
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Default export
export default StoreContextProvider;

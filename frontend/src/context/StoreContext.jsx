/* eslint-disable react-refresh/only-export-components */

import React, { createContext } from "react";
import { food_list } from "../assets/assets";

// Named export
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// Default export
export default StoreContextProvider;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    productsSlice: productsSlice,
  },
});

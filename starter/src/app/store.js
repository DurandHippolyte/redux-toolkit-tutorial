import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import modalReducer from "../features/modalSlice";

export const store = configureStore({
   reducer: {
      cartSliceStore: cartReducer,
      modal: modalReducer,
   },
});

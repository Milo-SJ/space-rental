import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from "./shipSlice";

export const store = configureStore({
  reducer: {
    ships: shipsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import shipsReducer from "./shipSlice";

export const store = configureStore(
  {
    reducer: {
      ships: shipsReducer,
    },
  },
  window.__REDUX_DEVTOOLS__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

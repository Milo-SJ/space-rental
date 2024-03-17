import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const shipSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    setShipData: (state, action) => {
      state.ships = action.payload;
    },
  },
});

export const { setShipData } = shipSlice.actions;

export default shipSlice.reducer;

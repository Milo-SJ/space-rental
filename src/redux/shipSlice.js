import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const shipSlice = createSlice({
  name: "ships",
  initialState,
  reducers: {
    setShipData: (state, { payload }) => {
      state.shipData = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
});

export const { setShipData, setSearchTerm } = shipSlice.actions;

export const selectShipData = (state) => state.ships.shipData;
export const selectSearchTerm = (state) => state.ships.searchTerm;

export default shipSlice.reducer;

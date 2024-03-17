import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const shipSlice = createSlice({
  name: "ships",
  initialState: getInitialShipData(),
  reducers: {},
});

export default shipSlice.reducer;

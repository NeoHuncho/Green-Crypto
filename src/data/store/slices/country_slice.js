import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    initCountryData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initCountryData } = countrySlice.actions;

export default countrySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import formatDisplayValue from "utils/formatDisplayValue";


const initialState = {};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    initListData: (state, action) => {
      state.data = action.payload;
    },
    updateCO2Data: (state, action) => {
      console.log("called");
      for (const [name, itemData] of Object.entries(state.data)) {
        if (!state.data[name].gCO2) {
          state.data[name].gCO2 = itemData.Wh_per_trans * action.payload;
        }
        state.data[name].gCO2_display_value = formatDisplayValue(
          "gCO2",
          state.data[name].gCO2
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { initListData, updateCO2Data, sortData } = listSlice.actions;

export default listSlice.reducer;

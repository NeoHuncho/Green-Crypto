import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false };

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateShowModal: (state, payload) => {
      console.log(payload);
      state.showModal = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateShowModal } = uiSlice.actions;

export default uiSlice.reducer;

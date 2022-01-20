import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/list_slice";
import countryReducer from "./slices/country_slice";
import uiReducer from "./slices/ui_slice";
export const store = configureStore({
  reducer: { list: listReducer, country: countryReducer, ui: uiReducer },
});

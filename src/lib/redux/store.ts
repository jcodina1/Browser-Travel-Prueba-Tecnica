import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import vehicleReducer from "./slices/vehicleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      vehicle: vehicleReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

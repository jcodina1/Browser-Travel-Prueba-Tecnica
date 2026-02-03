import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParams } from "../../types/vehicle.types";

interface SearchState {
  location: string;
  pickupDate: string;
  returnDate: string;
}

const initialState: SearchState = {
  location: "",
  pickupDate: "",
  returnDate: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParams>) => {
      state.location = action.payload.location;
      state.pickupDate = action.payload.pickupDate;
      state.returnDate = action.payload.returnDate;
    },
    resetSearch: (state) => {
      state.location = "";
      state.pickupDate = "";
      state.returnDate = "";
    },
  },
});

export const { setSearchParams, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "../../types/vehicle.types";
import { searchVehiclesThunk } from "../thunks/vehicleThunks";

interface VehicleState {
  results: Vehicle[];
  selectedVehicle: Vehicle | null;
  loading: boolean;
  error: string | null;
}

const initialState: VehicleState = {
  results: [],
  selectedVehicle: null,
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    selectVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.selectedVehicle = action.payload;
    },
    clearSelectedVehicle: (state) => {
      state.selectedVehicle = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchVehiclesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchVehiclesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchVehiclesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al buscar vehículos";
      });
  },
});

export const { selectVehicle, clearSelectedVehicle, clearError } =
  vehicleSlice.actions;
export default vehicleSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { vehicleService } from "../../services/vehicleService";
import { Vehicle } from "../../types/vehicle.types";

export const searchVehiclesThunk = createAsyncThunk<Vehicle[], string>(
  "vehicle/searchVehicles",
  async (location: string) => {
    const vehicles = await vehicleService.searchVehicles(location);
    return vehicles;
  }
);

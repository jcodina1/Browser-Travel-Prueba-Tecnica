import { Vehicle } from "../types/vehicle.types";
import vehiclesData from "../../data/vehicles.json";

export const vehicleService = {
  async searchVehicles(location: string): Promise<Vehicle[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would filter by location
    // For now, return all vehicles
    return vehiclesData as Vehicle[];
  },

  async getVehicleById(id: string): Promise<Vehicle | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const vehicle = vehiclesData.find((v) => v.id === id);
    return vehicle ? (vehicle as Vehicle) : null;
  },
};

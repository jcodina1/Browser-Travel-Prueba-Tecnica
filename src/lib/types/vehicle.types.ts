export type TransmissionType = "Manual" | "Automático";
export type FuelType = "Gasolina" | "Diésel" | "Eléctrico" | "Híbrido";
export type VehicleCategory = "Compacto" | "Sedán" | "SUV" | "Premium" | "Van";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  passengers: number;
  transmission: TransmissionType;
  fuel: FuelType;
  luggage: number;
  pricePerDay: number;
  features: string[];
}

export interface SearchParams {
  location: string;
  pickupDate: string;
  returnDate: string;
}

export interface RentalInfo {
  vehicle: Vehicle;
  searchParams: SearchParams;
  days: number;
  subtotal: number;
  tax: number;
  total: number;
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";
import VehicleSummary from "@/components/features/VehicleSummary";
import CostSummary from "@/components/features/CostSummary";

export default function SummaryPage() {
  const router = useRouter();
  const selectedVehicle = useAppSelector(
    (state) => state.vehicle.selectedVehicle
  );
  const searchParams = useAppSelector((state) => state.search);

  useEffect(() => {
    if (!selectedVehicle) {
      router.push("/");
    }
  }, [selectedVehicle, router]);

  if (!selectedVehicle) {
    return (
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center">
          <p className="text-xl text-[var(--color-text-secondary)]">
            Cargando...
          </p>
        </div>
      </div>
    );
  }

  const pickup = new Date(searchParams.pickupDate);
  const returnD = new Date(searchParams.returnDate);
  const days = Math.ceil(
    (returnD.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column - Vehicle Details */}
        <div className="lg:col-span-2">
          <VehicleSummary
            vehicle={selectedVehicle}
            pickupDate={searchParams.pickupDate}
            returnDate={searchParams.returnDate}
            location={searchParams.location}
          />
        </div>

        {/* Right Column - Cost Summary (Sticky) */}
        <div className="lg:sticky lg:top-6">
          <CostSummary pricePerDay={selectedVehicle.pricePerDay} days={days} />
        </div>
      </div>
    </div>
  );
}

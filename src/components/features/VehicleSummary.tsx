import Image from "next/image";
import { Vehicle } from "@/lib/types/vehicle.types";
import Card from "../ui/Card";

interface VehicleSummaryProps {
  vehicle: Vehicle;
  pickupDate: string;
  returnDate: string;
  location: string;
}

export default function VehicleSummary({
  vehicle,
  pickupDate,
  returnDate,
  location,
}: VehicleSummaryProps) {
  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
        Detalles de tu reservación
      </h2>

      <Card noPadding className="overflow-hidden">
        <div className="relative w-full h-72 bg-gray-200">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
              {vehicle.name}
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              {vehicle.category} • {vehicle.transmission}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--color-border)]">
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>{vehicle.passengers} pasajeros</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{vehicle.luggage} maletas</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>{vehicle.fuel}</span>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Información de renta
        </h3>

        <div className="space-y-5">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">
                Recogida
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {location}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {formatDateTime(pickupDate)}, 10:00
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">
                Devolución
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {location}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {formatDateTime(returnDate)}, 10:00
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

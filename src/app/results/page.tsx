import { vehicleService } from "@/lib/services/vehicleService";
import VehicleCard from "@/components/features/VehicleCard";

interface SearchParams {
  location: string;
  pickupDate: string;
  returnDate: string;
}

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const { location, pickupDate, returnDate } = params;

  if (!location || !pickupDate || !returnDate) {
    return (
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Parámetros de búsqueda incompletos
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Por favor, realiza una búsqueda desde la página principal.
          </p>
        </div>
      </div>
    );
  }

  const vehicles = await vehicleService.searchVehicles(location);

  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);
  const days = Math.ceil(
    (returnD.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 py-12">
      {/* Search Summary */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-3">
          Buscando en: {location}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-2">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              Del {formatDate(pickupDate)} al {formatDate(returnDate)}
            </span>
          </div>

          <div className="flex items-center gap-2">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{days} días de renta</span>
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      {vehicles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-[var(--color-text-secondary)]">
            No se encontraron vehículos disponibles.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} days={days} />
          ))}
        </div>
      )}
    </div>
  );
}

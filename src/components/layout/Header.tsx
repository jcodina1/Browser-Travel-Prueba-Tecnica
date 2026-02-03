import Link from "next/link";

export default function Header() {
  return (
    <header
      className="bg-white border-b border-[var(--color-border)]"
      role="banner"
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded"
          aria-label="OutletRentalCars - Volver al inicio"
        >
          OutletRentalCars
        </Link>
      </div>
    </header>
  );
}

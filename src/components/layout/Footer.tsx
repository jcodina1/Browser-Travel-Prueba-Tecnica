export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white border-t border-[var(--color-border)] mt-auto"
      role="contentinfo"
    >
      <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-center">
        <p className="text-sm text-[var(--color-text-secondary)]">
          © {currentYear} OutletRentalCars. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

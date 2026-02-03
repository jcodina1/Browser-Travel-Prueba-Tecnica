import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/redux/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OutletRentalCars - Renta de Vehículos",
  description:
    "Encuentra y renta el vehículo perfecto para tu próximo viaje. Compara precios y reserva en minutos.",
  keywords: ["renta de autos", "alquiler de coches", "vehículos", "viajes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex flex-col min-h-screen antialiased">
        <StoreProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

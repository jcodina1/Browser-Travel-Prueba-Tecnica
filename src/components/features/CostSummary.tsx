"use client";

import { useRouter } from "next/navigation";
import Card from "../ui/Card";
import Button from "../ui/Button";

interface CostSummaryProps {
  pricePerDay: number;
  days: number;
}

export default function CostSummary({ pricePerDay, days }: CostSummaryProps) {
  const router = useRouter();

  const subtotal = pricePerDay * days;
  const taxRate = 0.21; // 21% IVA
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + tax;

  const handleConfirm = () => {
    alert("¡Reservación confirmada! Esta es una demostración.");
    router.push("/");
  };

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-5">
          Resumen de costos
        </h3>

        <div className="space-y-3 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--color-text-secondary)]">
              Subtotal ({days} días × €{pricePerDay})
            </span>
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
              €{subtotal}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--color-text-secondary)]">
              Impuestos (21%)
            </span>
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
              €{tax}
            </span>
          </div>
        </div>

        <div className="pt-5 border-t border-[var(--color-border)]">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[var(--color-text-primary)]">
              Total
            </span>
            <span className="text-3xl font-bold text-[var(--color-success)]">
              €{total}
            </span>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <Button
          variant="outline"
          fullWidth
          onClick={() => router.back()}
          className="h-12"
        >
          Volver a resultados
        </Button>

        <Button
          variant="primary"
          fullWidth
          onClick={handleConfirm}
          className="h-14"
        >
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          Confirmar reservación
        </Button>
      </div>
    </div>
  );
}

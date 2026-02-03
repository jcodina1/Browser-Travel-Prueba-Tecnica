"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSearchParams } from "@/lib/redux/slices/searchSlice";
import Input from "../ui/Input";
import DatePicker from "../ui/DatePicker";
import Button from "../ui/Button";

export default function SearchForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!location.trim()) {
      newErrors.location = "La ubicación es requerida";
    }

    if (!pickupDate) {
      newErrors.pickupDate = "La fecha de recogida es requerida";
    }

    if (!returnDate) {
      newErrors.returnDate = "La fecha de devolución es requerida";
    }

    if (pickupDate && returnDate && new Date(pickupDate) >= new Date(returnDate)) {
      newErrors.returnDate =
        "La fecha de devolución debe ser posterior a la recogida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    dispatch(
      setSearchParams({
        location,
        pickupDate,
        returnDate,
      })
    );

    const params = new URLSearchParams({
      location,
      pickupDate,
      returnDate,
    });

    router.push(`/results?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-2xl"
      noValidate
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          Encuentra tu vehículo ideal
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          Compara precios y reserva en minutos
        </p>
      </div>

      <div className="space-y-4">
        <Input
          label="Ciudad o Aeropuerto"
          type="text"
          placeholder="Ej: Madrid, Barcelona..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          error={errors.location}
          required
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <DatePicker
            label="Fecha de recogida"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            error={errors.pickupDate}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          <DatePicker
            label="Fecha de devolución"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            error={errors.returnDate}
            min={pickupDate || new Date().toISOString().split("T")[0]}
            required
          />
        </div>

        <Button type="submit" variant="primary" fullWidth className="h-14 text-lg mt-2">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Buscar vehículos
        </Button>
      </div>
    </form>
  );
}

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] focus:ring-[var(--color-primary)]",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-gray-800 focus:ring-[var(--color-secondary)]",
    outline:
      "bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-gray-50 focus:ring-[var(--color-primary)]",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

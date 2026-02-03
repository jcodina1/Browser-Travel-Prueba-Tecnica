import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function Card({
  children,
  className = "",
  noPadding = false,
}: CardProps) {
  const paddingStyles = noPadding ? "" : "p-6";

  return (
    <div
      className={`bg-white rounded-xl border border-[var(--color-border)] shadow-sm ${paddingStyles} ${className}`}
    >
      {children}
    </div>
  );
}

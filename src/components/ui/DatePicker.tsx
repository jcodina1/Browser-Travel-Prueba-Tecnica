import { InputHTMLAttributes, forwardRef } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2 flex-1">
        <label
          htmlFor={inputId}
          className="text-sm font-semibold text-[var(--color-text-primary)]"
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            type="date"
            id={inputId}
            className={`w-full h-12 px-4 border border-[var(--color-border)] rounded-lg bg-white text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-shadow ${className}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-[var(--color-text-secondary)]"
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
          </div>
        </div>
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-sm text-red-600"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;

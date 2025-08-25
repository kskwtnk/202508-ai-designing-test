import { SelectHTMLAttributes, useId } from "react";

const ChevronDownIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  helpText?: string;
  errorText?: string;
  highlight?: boolean;
  ref?: React.Ref<HTMLSelectElement>;
}

const Select = ({
  label,
  placeholder = "プレースホルダー",
  options,
  helpText,
  errorText,
  highlight = false,
  ref,
  ...props
}: SelectProps) => {
  const selectId = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={selectId} className="text-sm text-slate-900">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          ref={ref}
          className={`w-full appearance-none rounded-md border border-slate-300 bg-white py-2.5 pr-10 pl-3 text-base text-slate-900 disabled:opacity-50 ${
            highlight ? "highlight-pulse" : ""
          }`}
          defaultValue={placeholder ? "" : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-600">
          <ChevronDownIcon />
        </div>
      </div>
      {helpText && <p className="text-xs text-slate-600">{helpText}</p>}
      {errorText && <p className="text-xs text-red-600">{errorText}</p>}
    </div>
  );
};

Select.displayName = "Select";

export default Select;

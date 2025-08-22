import { InputHTMLAttributes, useId } from "react";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  placeholder?: string;
  helpText?: string;
  errorText?: string;
  unitText?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const TextField = ({
  label,
  placeholder = "プレースホルダー",
  helpText,
  errorText,
  unitText,
  ref,
  ...props
}: TextFieldProps) => {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm text-slate-900">
          {label}
        </label>
      )}
      <div className="flex items-center gap-1.5">
        <input
          id={inputId}
          ref={ref}
          placeholder={placeholder}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 placeholder:text-slate-400 disabled:opacity-50"
          {...props}
        />
        {unitText && <div className="text-sm text-slate-600">{unitText}</div>}
      </div>
      {helpText && <p className="text-xs text-slate-600">{helpText}</p>}
      {errorText && <p className="text-xs text-red-600">{errorText}</p>}
    </div>
  );
};

TextField.displayName = "TextField";

export default TextField;

import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex gap-1 items-center justify-center p-3 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none",
  variants: {
    color: {
      main: "bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-300",
      accent:
        "bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-lg shadow-purple-300",
    },
  },
  defaultVariants: {
    color: "main",
  },
});

const secondaryLabelVariants = tv({
  base: "rounded shrink-0 px-1 py-0.5 text-sm font-bold",
  variants: {
    color: {
      main: "bg-sky-100 text-sky-700",
      accent: "bg-fuchsia-100 text-fuchsia-700",
    },
  },
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "className">,
    VariantProps<typeof buttonVariants> {
  primaryLabel: string;
  secondaryLabel?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({
  color = "main",
  primaryLabel,
  secondaryLabel,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ color })}
      ref={ref}
      {...props}
    >
      {secondaryLabel && (
        <p className={secondaryLabelVariants({ color })}>{secondaryLabel}</p>
      )}
      <p className="px-1">{primaryLabel}</p>
    </button>
  );
}

export default Button;

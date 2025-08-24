import { AnchorHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center gap-1 rounded-lg p-3 text-lg font-bold shadow-md transition-colors",
  variants: {
    color: {
      main: "bg-sky-600 text-white shadow-sky-300 hover:bg-sky-700",
      accent:
        "bg-fuchsia-600 text-white shadow-purple-300 hover:bg-fuchsia-700",
    },
  },
  defaultVariants: {
    color: "main",
  },
});

const secondaryLabelVariants = tv({
  base: "shrink-0 rounded px-1 py-0.5 text-sm font-bold",
  variants: {
    color: {
      main: "bg-sky-100 text-sky-700",
      accent: "bg-fuchsia-100 text-fuchsia-700",
    },
  },
});

interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "className">,
    VariantProps<typeof buttonVariants> {
  primaryLabel: string;
  secondaryLabel?: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

function LinkButton({
  color = "main",
  primaryLabel,
  secondaryLabel,
  ref,
  ...props
}: LinkButtonProps) {
  return (
    <a className={buttonVariants({ color })} ref={ref} {...props}>
      {secondaryLabel && (
        <p className={secondaryLabelVariants({ color })}>{secondaryLabel}</p>
      )}
      <p className="px-1">{primaryLabel}</p>
    </a>
  );
}

export default LinkButton;

"use client";

import { useStickyCtaContext } from "./StickyCtaProvider";
import Button from "./Button";

interface StickyCtaButtonProps {
  targetElementId: string;
  primaryLabel: string;
  secondaryLabel?: string;
  color?: "main" | "accent";
}

export function StickyCtaButton({
  targetElementId,
  primaryLabel,
  secondaryLabel,
  color = "main",
}: StickyCtaButtonProps) {
  const { isVisible } = useStickyCtaContext();

  const handleClick = () => {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      console.warn(`Element with id "${targetElementId}" not found`);
    }
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  // Respect prefers-reduced-motion
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`
        fixed bottom-4 left-4 right-4 z-50 
        transform ${prefersReducedMotion ? "transition-none" : "transition-all duration-300 ease-in-out"}
        md:left-auto md:right-4 md:max-w-sm
        ${
          isVisible 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "translate-y-full opacity-0 pointer-events-none"
        }
      `}
      aria-live="polite"
      aria-label={isVisible ? "追従CTA表示中" : "追従CTA非表示"}
      role="region"
    >
      <Button
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        color={color}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={`${primaryLabel}${secondaryLabel ? ` ${secondaryLabel}` : ""} - 最終フォームセクションにスクロール`}
        tabIndex={isVisible ? 0 : -1}
        style={{
          minHeight: "44px", // Ensure minimum touch target size
        }}
      />
    </div>
  );
}
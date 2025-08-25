import { tv } from "tailwind-variants";
import LinkButton from "./LinkButton";
import useScrollVisibility from "@/hooks/useScrollVisibility";

const stickyCtaVariants = tv({
  base: "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
  variants: {
    visible: {
      true: "translate-y-0 opacity-100",
      false: "translate-y-full opacity-0 pointer-events-none",
    },
  },
});

const backgroundVariants = tv({
  base: "w-full bg-black bg-opacity-50 backdrop-blur-sm p-4 flex",
});

interface StickyCTAProps {
  firstFormRef: React.RefObject<HTMLElement | null>;
  finalFormRef: React.RefObject<HTMLElement | null>;
}

function StickyCTA({ firstFormRef, finalFormRef }: StickyCTAProps) {
  const { isVisible } = useScrollVisibility(firstFormRef, finalFormRef);

  const scrollToFinalForm = () => {
    finalFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToFinalForm();
  };

  return (
    <div className={stickyCtaVariants({ visible: isVisible })}>
      <div className={backgroundVariants()}>
        <LinkButton
          primaryLabel="今すぐ資料請求する"
          color="accent"
          href="#final-form"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default StickyCTA;
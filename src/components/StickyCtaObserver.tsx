"use client";

import { useEffect } from "react";
import { useStickyCtaContext } from "./StickyCtaProvider";

interface StickyCtaObserverProps {
  triggerElementId: string;
  hideElementId: string;
}

export function StickyCtaObserver({
  triggerElementId,
  hideElementId,
}: StickyCtaObserverProps) {
  const { setIsVisible } = useStickyCtaContext();

  useEffect(() => {
    // Feature detection for Intersection Observer
    if (typeof IntersectionObserver === "undefined") {
      console.warn("Intersection Observer is not supported");
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    let triggerObserver: IntersectionObserver | null = null;
    let hideObserver: IntersectionObserver | null = null;

    // Track visibility states
    let triggerPassed = false;
    let hideVisible = false;

    const updateVisibility = () => {
      const shouldShow = triggerPassed && !hideVisible;
      setIsVisible(shouldShow);
    };

    // Observer for trigger element (first form section)
    const triggerElement = document.getElementById(triggerElementId);
    if (triggerElement) {
      triggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If the trigger element is not visible, the user has scrolled past it
          triggerPassed = !entry.isIntersecting;
          updateVisibility();
        });
      }, observerOptions);

      triggerObserver.observe(triggerElement);
    } else {
      console.warn(`Element with id "${triggerElementId}" not found`);
    }

    // Observer for hide element (final form section)
    const hideElement = document.getElementById(hideElementId);
    if (hideElement) {
      hideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          hideVisible = entry.isIntersecting;
          updateVisibility();
        });
      }, observerOptions);

      hideObserver.observe(hideElement);
    } else {
      console.warn(`Element with id "${hideElementId}" not found`);
    }

    // Cleanup observers on unmount
    return () => {
      if (triggerObserver) {
        triggerObserver.disconnect();
      }
      if (hideObserver) {
        hideObserver.disconnect();
      }
    };
  }, [triggerElementId, hideElementId, setIsVisible]);

  return null;
}
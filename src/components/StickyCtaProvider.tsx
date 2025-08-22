"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface StickyCtaContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const StickyCtaContext = createContext<StickyCtaContextType | null>(null);

interface StickyCtaProviderProps {
  children: ReactNode;
}

export function StickyCtaProvider({ children }: StickyCtaProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <StickyCtaContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </StickyCtaContext.Provider>
  );
}

export function useStickyCtaContext() {
  const context = useContext(StickyCtaContext);
  if (!context) {
    throw new Error("useStickyCtaContext must be used within a StickyCtaProvider");
  }
  return context;
}
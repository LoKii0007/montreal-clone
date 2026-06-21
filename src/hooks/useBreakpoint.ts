"use client";

import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "xl" | "2xl";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1280,
  "2xl": 1536,
};

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS["2xl"]) return "2xl";
  if (width >= BREAKPOINTS.xl) return "xl";
  if (width >= BREAKPOINTS.md) return "md";
  return "sm";
}

export function useBreakpoint(): Breakpoint | null {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const handler = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", handler);
    handler();
    return () => window.removeEventListener("resize", handler);
  }, []);

  return breakpoint;
}

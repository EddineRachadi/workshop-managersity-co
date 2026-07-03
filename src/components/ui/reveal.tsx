"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Délai d'apparition en ms (effet cascade). */
  delay?: number;
  /** Style d'apparition. "up" (défaut) : fondu + léger glissement vers le haut. */
  variant?: "up" | "fade" | "zoom" | "left" | "right";
}

/** Anime l'apparition d'un bloc lorsqu'il entre dans le viewport. */
export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    // Filet de sécurité : si l'observer ne se déclenche jamais, on révèle quand même.
    const fallback = setTimeout(() => setVisible(true), 1200);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        variant !== "up" && `reveal-${variant}`,
        visible && "is-visible",
        className
      )}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

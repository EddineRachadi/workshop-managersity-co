"use client";

import { useEffect, useRef, useState } from "react";

/** Fine barre de progression de lecture en haut de page. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gold ws-progress"
      style={{ ["--ws-scroll" as string]: progress }}
    />
  );
}

interface CountUpProps {
  to: number;
  /** Durée de l'animation en ms. */
  duration?: number;
  /** Nombre de chiffres pour le zéro-padding (ex. 2 → "02"). */
  pad?: number;
  className?: string;
}

/** Compteur qui s'incrémente quand il entre dans le viewport. */
export function CountUp({ to, duration = 1300, pad = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Valeur finale par défaut : le vrai chiffre s'affiche toujours (SSR + si le
  // JS ne s'exécute pas), donc jamais bloqué sur « 00 ».
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();
        // On repart de 0 juste avant d'animer (l'effet 0→valeur est conservé
        // quand le JS tourne).
        setValue(0);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * to));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {pad ? String(value).padStart(pad, "0") : value}
    </span>
  );
}

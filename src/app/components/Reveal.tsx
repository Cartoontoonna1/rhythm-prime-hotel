"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  direction?: "up" | "left" | "right" | "scale" | "stagger";
  delay?: number;
  threshold?: number;
  once?: boolean;
  style?: CSSProperties;
};

const directionClassMap = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  stagger: "reveal-stagger",
} as const;

export default function Reveal({
  children,
  className,
  as: Component = "div",
  direction = "up",
  delay = 0,
  threshold = 0.16,
  once = true,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  const wrapperClassName = ["reveal", directionClassMap[direction], isVisible ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref as never}
      className={wrapperClassName}
      style={{
        ...(style ?? {}),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
}

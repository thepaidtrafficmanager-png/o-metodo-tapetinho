import React, { useRef, useEffect } from "react";
import { useReducedMotion } from "motion/react";

export const SpotlightOverlay: React.FC<{ className?: string }> = ({ 
  className = "absolute inset-0 pointer-events-none rounded-[inherit]" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;
    
    // Attach to the closest positioned parent
    const parent = el.parentElement;
    if (!parent) return;

    if (!window.matchMedia("(pointer: fine)").matches) return;

    let reqId: number;

    const handleMouseMove = (e: MouseEvent) => {
      reqId = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        parent.style.setProperty("--sx", `${x}px`);
        parent.style.setProperty("--sy", `${y}px`);
      });
    };

    parent.addEventListener("mousemove", handleMouseMove);
    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(reqId);
    };
  }, [prefersReducedMotion]);

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        background: `radial-gradient(350px circle at var(--sx,50%) var(--sy,40%), rgba(230,238,150,0.14), transparent 70%)`
      }}
      aria-hidden="true"
    />
  );
};

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from "motion/react";

export const TiltCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  
  const isHovered = useMotionValue(0);
  const opacity = useSpring(isHovered, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
    
    ref.current.style.setProperty("--mx", `${mouseX}px`);
    ref.current.style.setProperty("--my", `${mouseY}px`);
  };

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) isHovered.set(1);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    isHovered.set(0);
    x.set(0);
    y.set(0);
  };

  const isTouch = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;
  const shouldDisable = prefersReducedMotion || isTouch;

  if (shouldDisable) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        transformStyle: "preserve-3d"
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full rounded-[inherit] relative"
      >
        {children}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            opacity,
            background: "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.20), transparent 60%)"
          }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
};

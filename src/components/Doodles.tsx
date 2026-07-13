import React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface DoodleProps {
  className?: string;
  color?: string;
}

export const DoodleCircle: React.FC<DoodleProps> = ({
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute pointer-events-none ${className}`}
      style={{ overflow: "visible" }}
    >
      <path
        d="M10,25 C30,5 130,2 145,15 C160,28 120,45 80,47 C40,49 5,40 12,28 C15,22 45,12 85,10"
        className="animate-draw-line"
        style={{
          strokeDasharray: 500,
          strokeDashoffset: 500,
          animationDelay: "0.5s",
        }}
      />
    </svg>
  );
};

export const DoodleUnderline: React.FC<DoodleProps> = ({
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      className={`absolute pointer-events-none ${className}`}
      style={{ overflow: "visible" }}
    >
      <path
        d="M4,7 Q50,2 100,7 T196,5"
        className="animate-draw-line"
        style={{
          strokeDasharray: 300,
          strokeDashoffset: 300,
          animationDelay: "0.2s",
        }}
      />
    </svg>
  );
};

export const DoodleArrow: React.FC<DoodleProps> = ({
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute pointer-events-none ${className}`}
      style={{ overflow: "visible" }}
    >
      {/* Curved body */}
      <path
        d="M10,10 C25,25 20,40 45,45"
        className="animate-draw-line"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 100,
        }}
      />
      {/* Arrowhead */}
      <path
        d="M32,45 L46,46 L45,32"
        className="animate-draw-line"
        style={{
          strokeDasharray: 40,
          strokeDashoffset: 40,
          animationDelay: "0.4s",
        }}
      />
    </svg>
  );
};

export const DoodleStar: React.FC<DoodleProps & { delay?: string }> = ({
  className = "",
  color = "currentColor",
  delay = "0s",
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute pointer-events-none ${className}`}
    >
      <path
        d="M16,2 L20,11 L30,11 L22,18 L25,28 L16,22 L7,28 L10,18 L2,11 L12,11 Z"
        className="animate-draw-line"
        style={{
          strokeDasharray: 120,
          strokeDashoffset: 120,
          animationDelay: delay,
        }}
      />
    </svg>
  );
};

export const DoodleSparkle: React.FC<DoodleProps & { delay?: string }> = ({
  className = "",
  color = "currentColor",
  delay = "0s",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      className={`absolute pointer-events-none ${className}`}
    >
      <path
        d="M12,3 L12,9 M12,15 L12,21 M3,12 L9,12 M15,12 L21,12 M6,6 L18,18 M6,18 L18,6"
        className="animate-draw-line"
        style={{
          strokeDasharray: 80,
          strokeDashoffset: 80,
          animationDelay: delay,
        }}
      />
    </svg>
  );
};

export const DoodlePaw: React.FC<DoodleProps> = ({
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      className={`pointer-events-none ${className}`}
    >
      {/* Pads */}
      <circle cx="12" cy="14" r="3.5" />
      <circle cx="6" cy="9" r="1.8" />
      <circle cx="10" cy="6" r="2" />
      <circle cx="14" cy="6" r="2" />
      <circle cx="18" cy="9" r="1.8" />
    </svg>
  );
};

/* Magnetic wrapper: the child eases toward the cursor and springs back on leave. Desktop (pointer:fine) + full-motion only. */
export const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const ref = React.useRef<HTMLDivElement>(null);
  const active =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) < 200) {
      x.set(dx * 0.35);
      y.set(dy * 0.35);
    }
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!active) return <div className={className}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={"inline-block p-3 -m-3 " + className}
    >
      {children}
    </motion.div>
  );
};
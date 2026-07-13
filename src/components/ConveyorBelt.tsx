import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export function ConveyorBelt({ children, speed = 40 }: { children: React.ReactNode, speed?: number }) {
  const x = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isHovered, setIsHovered] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) setIsPlaying(false);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const updateWidth = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
    };
    // small delay to ensure fonts/images loaded
    const timeout = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    return x.on("change", (latest) => {
      if (!contentWidth) return;
      if (latest <= -contentWidth) {
        x.set(latest + contentWidth);
      } else if (latest > 0) {
        x.set(latest - contentWidth);
      }
    });
  }, [contentWidth, x]);

  useAnimationFrame((t, delta) => {
    if (!isPlaying || isHovered || prefersReducedMotion || !contentWidth) return;
    x.set(x.get() - (speed * delta) / 1000);
  });

  return (
    <div className="relative w-full overflow-hidden py-4 group">
      <div className="absolute top-2 right-4 z-20 flex justify-end pointer-events-auto">
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_24px_48px_-24px_rgba(30,38,32,0.45),0_4px_12px_-6px_rgba(30,38,32,0.2)] hover:-translate-y-1 hover:shadow-[0_32px_64px_-24px_rgba(30,38,32,0.5),0_8px_16px_-8px_rgba(30,38,32,0.3)] transition-all duration-300 border border-brand-sage/10 text-brand-sage hover:bg-brand-sage hover:text-white transition-colors"
          aria-label={isPlaying ? "Pausar" : "Tocar"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      <motion.div
        className="flex w-max items-stretch cursor-grab active:cursor-grabbing pb-8 pt-4 px-4"
        style={{ x }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        drag={prefersReducedMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
      >
        <div ref={contentRef} className="flex gap-6 pr-6">
          {children}
        </div>
        <div className="flex gap-6 pr-6">
          {children}
        </div>
        <div className="flex gap-6 pr-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
